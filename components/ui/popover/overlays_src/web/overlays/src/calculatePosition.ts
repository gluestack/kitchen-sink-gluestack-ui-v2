// @ts-nocheck
/* eslint @typescript-eslint/no-unused-vars: 2 */

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  Axis,
  Placement,
  PlacementAxis,
  SizeAxis,
} from "@react-types/overlays";
import getCss from "dom-helpers/css";
import getOffset from "dom-helpers/offset";
import getPosition from "dom-helpers/position";
import getScrollLeft from "dom-helpers/scrollLeft";
import getScrollTop from "dom-helpers/scrollTop";
import ownerDocument from "dom-helpers/ownerDocument";
import getComputedStyle from "dom-helpers/getComputedStyle";

interface Position {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface Dimensions {
  width: number;
  height: number;
  top: number;
  left: number;
  scroll: Position;
}

interface ParsedPlacement {
  placement: PlacementAxis;
  crossPlacement: PlacementAxis;
  axis: Axis;
  crossAxis: Axis;
  size: SizeAxis;
  crossSize: SizeAxis;
}

interface Offset {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface PositionOpts {
  placement: Placement;
  targetNode: HTMLElement;
  overlayNode: HTMLElement;
  scrollNode: HTMLElement;
  padding: number;
  shouldFlip: boolean;
  boundaryElement: HTMLElement;
  offset: number;
  crossOffset: number;
  shouldOverlapWithTrigger: boolean;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

const AXIS = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left",
};

const FLIPPED_DIRECTION = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const CROSS_AXIS = {
  top: "left",
  left: "top",
};

const AXIS_SIZE = {
  top: "height",
  left: "width",
};

const PARSED_PLACEMENT_CACHE = {};

// @ts-ignore
let visualViewport = typeof window !== "undefined" && window.visualViewport;

function getContainerDimensions(containerNode: Element): Dimensions {
  let width = 0,
    height = 0,
    top = 0,
    left = 0;
  let scroll: Position = {};

  if (containerNode.tagName === "BODY") {
    width = visualViewport?.width ?? document.documentElement.clientWidth;
    height = visualViewport?.height ?? document.documentElement.clientHeight;

    scroll.top =
      getScrollTop(ownerDocument(containerNode).documentElement) ||
      getScrollTop(containerNode);
    scroll.left =
      getScrollLeft(ownerDocument(containerNode).documentElement) ||
      getScrollLeft(containerNode);
  } else {
    ({ width, height, top, left } = getOffset(containerNode));
    scroll.top = getScrollTop(containerNode);
    scroll.left = getScrollLeft(containerNode);
  }

  return { width, height, scroll, top, left };
}

function getScroll(node: HTMLElement): Offset {
  return {
    top: node.scrollTop,
    left: node.scrollLeft,
    width: node.scrollWidth,
    height: node.scrollHeight,
  };
}

function getDelta(
  axis: Axis,
  offset: number,
  size: number,
  containerDimensions: Dimensions,
  padding: number
) {
  let containerScroll = containerDimensions.scroll[axis];
  let containerHeight = containerDimensions[AXIS_SIZE[axis]];

  let startEdgeOffset = offset - padding - containerScroll;
  let endEdgeOffset = offset + padding - containerScroll + size;

  if (startEdgeOffset < 0) {
    return -startEdgeOffset;
  } else if (endEdgeOffset > containerHeight) {
    return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
  } else {
    return 0;
  }
}

function getMargins(node: HTMLElement): Position {
  let style = window.getComputedStyle(node);
  return {
    top: parseInt(style.marginTop, 10) || 0,
    bottom: parseInt(style.marginBottom, 10) || 0,
    left: parseInt(style.marginLeft, 10) || 0,
    right: parseInt(style.marginRight, 10) || 0,
  };
}

function parsePlacement(input: Placement): ParsedPlacement {
  if (PARSED_PLACEMENT_CACHE[input]) {
    return PARSED_PLACEMENT_CACHE[input];
  }

  let [placement, crossPlacement] = input.split(" ");
  let axis: Axis = AXIS[placement] || "right";
  let crossAxis: Axis = CROSS_AXIS[axis];

  if (!AXIS[crossPlacement]) {
    crossPlacement = "center";
  }

  let size = AXIS_SIZE[axis];
  let crossSize = AXIS_SIZE[crossAxis];
  PARSED_PLACEMENT_CACHE[input] = {
    placement,
    crossPlacement,
    axis,
    crossAxis,
    size,
    crossSize,
  };
  return PARSED_PLACEMENT_CACHE[input];
}

function computePosition(
  childOffset: Offset,
  boundaryDimensions: Dimensions,
  overlaySize: Offset,
  placementInfo: ParsedPlacement,
  offset: number,
  crossOffset: number,
  containerOffsetWithBoundary: Offset,
  isContainerPositioned: boolean
) {
  let { placement, crossPlacement, axis, crossAxis, size, crossSize } =
    placementInfo;
  let position: Position = {};

  // button position
  position[crossAxis] = childOffset[crossAxis];

  if (crossPlacement === "center") {
    //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] +=
      (childOffset[crossSize] - overlaySize[crossSize]) / 2;
  } else if (crossPlacement !== crossAxis) {
    //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
  } /* else {
    the overlay top should match the button top
  } */
  // add the crossOffset from props
  position[crossAxis] += crossOffset;

  // // this is button center position - the overlay size + half of the button to align bottom of overlay with button center
  // let minViablePosition =
  //   childOffset[crossAxis] +
  //   childOffset[crossSize] / 2 -
  //   overlaySize[crossSize];
  // // this is button position of center, aligns top of overlay with button center
  // let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2;

  // // clamp it into the range of the min/max positions
  // position[crossAxis] = Math.min(
  //   Math.max(minViablePosition, position[crossAxis]),
  //   maxViablePosition
  // );

  // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
  if (placement === axis) {
    // If the container is positioned (non-static), then we use the container's actual
    // height, as `bottom` will be relative to this height.  But if the container is static,
    // then it can only be the `document.body`, and `bottom` will be relative to _its_
    // container, which should be as large as boundaryDimensions.
    const containerHeight = isContainerPositioned
      ? containerOffsetWithBoundary[size]
      : boundaryDimensions[size];
    position[FLIPPED_DIRECTION[axis]] = Math.floor(
      containerHeight - childOffset[axis] + offset
    );
  } else {
    position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
  }

  return position;
}

function getMaxHeight(
  position: Position,
  boundaryDimensions: Dimensions,
  containerOffsetWithBoundary: Offset,
  childOffset: Offset,
  margins: Position,
  padding: number
) {
  return position.top != null
    ? // We want the distance between the top of the overlay to the bottom of the boundary
      Math.max(
        0,
        boundaryDimensions.height +
          boundaryDimensions.top +
          boundaryDimensions.scroll.top - // this is the bottom of the boundary
          (containerOffsetWithBoundary.top + position.top) - // this is the top of the overlay
          (margins.top + margins.bottom + padding) // save additional space for margin and padding
      )
    : // We want the distance between the top of the trigger to the top of the boundary
      Math.max(
        0,
        childOffset.top +
          containerOffsetWithBoundary.top - // this is the top of the trigger
          (boundaryDimensions.top + boundaryDimensions.scroll.top) - // this is the top of the boundary
          (margins.top + margins.bottom + padding) // save additional space for margin and padding
      );
}

function getAvailableSpace(
  boundaryDimensions: Dimensions,
  containerOffsetWithBoundary: Offset,
  childOffset: Offset,
  margins: Position,
  padding: number,
  placementInfo: ParsedPlacement
) {
  let { placement, axis, size } = placementInfo;
  if (placement === axis) {
    return Math.max(
      0,
      childOffset[axis] -
        boundaryDimensions[axis] -
        boundaryDimensions.scroll[axis] +
        containerOffsetWithBoundary[axis] -
        margins[axis] -
        margins[FLIPPED_DIRECTION[axis]] -
        padding
    );
  }

  return Math.max(
    0,
    boundaryDimensions[size] +
      boundaryDimensions[axis] +
      boundaryDimensions.scroll[axis] -
      containerOffsetWithBoundary[axis] -
      childOffset[axis] -
      childOffset[size] -
      margins[axis] -
      margins[FLIPPED_DIRECTION[axis]] -
      padding
  );
}

export function calculatePositionInternal(
  placementInput: Placement,
  childOffset: Offset,
  overlaySize: Offset,
  scrollSize: Offset,
  margins: Position,
  padding: number,
  flip: boolean,
  boundaryDimensions: Dimensions,
  containerOffsetWithBoundary: Offset,
  offset: number,
  crossOffset: number,
  isContainerPositioned: boolean,
  shouldOverlapWithTrigger: boolean
): PositionResult {
  let placementInfo = parsePlacement(placementInput);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { size, crossAxis, crossSize, placement, crossPlacement, axis } =
    placementInfo;
  let position = computePosition(
    childOffset,
    boundaryDimensions,
    overlaySize,
    placementInfo,
    offset,
    crossOffset,
    containerOffsetWithBoundary,
    isContainerPositioned
  );
  let isFlipped = false;
  let normalizedOffset = offset;
  let space = getAvailableSpace(
    boundaryDimensions,
    containerOffsetWithBoundary,
    childOffset,
    margins,
    padding + offset,
    placementInfo
  );

  // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
  if (flip && scrollSize[size] > space) {
    let flippedPlacementInfo = parsePlacement(
      `${FLIPPED_DIRECTION[placement]} ${crossPlacement}` as Placement
    );
    let flippedPosition = computePosition(
      childOffset,
      boundaryDimensions,
      overlaySize,
      flippedPlacementInfo,
      offset,
      crossOffset,
      containerOffsetWithBoundary,
      isContainerPositioned
    );
    let flippedSpace = getAvailableSpace(
      boundaryDimensions,
      containerOffsetWithBoundary,
      childOffset,
      margins,
      padding + offset,
      flippedPlacementInfo
    );

    // If the available space for the flipped position is greater than the original available space, flip.
    if (flippedSpace > space) {
      isFlipped = true;
      placementInfo = flippedPlacementInfo;
      position = flippedPosition;
      normalizedOffset = offset;
    } else {
      isFlipped = false;
    }
  } else {
    isFlipped = false;
  }

  let delta = getDelta(
    crossAxis,
    position[crossAxis],
    overlaySize[crossSize],
    boundaryDimensions,
    padding
  );
  position[crossAxis] += delta;

  let maxHeight = getMaxHeight(
    position,
    boundaryDimensions,
    containerOffsetWithBoundary,
    childOffset,
    margins,
    padding
  );

  overlaySize.height = Math.min(overlaySize.height, maxHeight);
  console.log("overlaySize", overlaySize);

  position = computePosition(
    childOffset,
    boundaryDimensions,
    overlaySize,
    placementInfo,
    normalizedOffset,
    crossOffset,
    containerOffsetWithBoundary,
    isContainerPositioned
  );
  delta = getDelta(
    crossAxis,
    position[crossAxis],
    overlaySize[crossSize],
    boundaryDimensions,
    padding
  );
  position[crossAxis] += delta;

  console.log("crossAxis", crossAxis);
  console.log("crossSize", crossSize);
  console.log("childOffset", childOffset);
  console.log("position", position);

  let arrowPosition: Position = {};
  arrowPosition[crossAxis] =
    childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;

  console.log("arrowPosition", arrowPosition);

  if (shouldOverlapWithTrigger) {
    position[FLIPPED_DIRECTION[placementInfo.placement]] =
      position[FLIPPED_DIRECTION[placementInfo.placement]] - childOffset[size];
  }

  return {
    position,
    maxHeight: maxHeight,
    arrowOffsetLeft: arrowPosition.left,
    arrowOffsetTop: arrowPosition.top,
    placement: placementInfo.placement,
    isFlipped,
  };
}

/**
 * Determines where to place the overlay with regards to the target and the position of an optional indicator.
 */
export function calculatePosition(opts: PositionOpts): PositionResult {
  let {
    placement,
    targetNode,
    overlayNode,
    scrollNode,
    padding,
    shouldFlip,
    boundaryElement,
    offset,
    crossOffset,
    shouldOverlapWithTrigger,
  } = opts;

  let container = overlayNode.offsetParent || document.body;
  let isBodyContainer = container.tagName === "BODY";
  const containerPositionStyle = window.getComputedStyle(container).position;
  let isContainerPositioned =
    !!containerPositionStyle && containerPositionStyle !== "static";
  let childOffset: Offset = isBodyContainer
    ? getOffset(targetNode)
    : getPosition(targetNode, container);

  if (!isBodyContainer) {
    childOffset.top += parseInt(getCss(targetNode, "marginTop"), 10) || 0;
    childOffset.left += parseInt(getCss(targetNode, "marginLeft"), 10) || 0;
  }

  let overlaySize: Offset = getOffset(overlayNode);
  const matrix = getComputedStyle(overlayNode).getPropertyValue("transform");
  const transform = matrix;
  const regex =
    /matrix\((-?\d*\.?\d+),\s*(-?\d*\.?\d+),\s*(-?\d*\.?\d+),\s*(-?\d*\.?\d+),\s*(-?\d*\.?\d+),\s*(-?\d*\.?\d+)\)/;
  const matches = transform.match(regex);
  let scaleX = 1;
  let scaleY = 1;

  if (matches) {
    scaleX = parseFloat(matches[1]);
    scaleY = parseFloat(matches[4]);
    if (!scaleX || !Number.isFinite(scaleX)) {
      scaleX = 1;
    }

    if (!scaleY || !Number.isFinite(scaleY)) {
      scaleY = 1;
    }
  }

  let margins = getMargins(overlayNode);
  overlaySize.width += margins.left + margins.right;
  overlaySize.height += margins.top + margins.bottom;

  if (scaleX) {
    overlaySize.width = overlaySize.width / scaleX;
  }
  if (scaleY) {
    overlaySize.height = overlaySize.height / scaleY;
  }

  let scrollSize = getScroll(scrollNode);
  let boundaryDimensions = getContainerDimensions(boundaryElement);
  let containerOffsetWithBoundary: Offset =
    boundaryElement.tagName === "BODY"
      ? getOffset(container)
      : getPosition(container, boundaryElement);

  // console.log("placement", placement);
  // console.log("childOffset", childOffset);
  // console.log("overlaySize", overlaySize);
  // console.log("scrollSize", scrollSize);
  // console.log("margins", margins);
  // console.log("padding", padding);
  // console.log("shouldFlip", shouldFlip);
  // console.log("boundaryDimensions", boundaryDimensions);
  // console.log("containerOffsetWithBoundary", containerOffsetWithBoundary);
  // console.log("offset", offset);
  // console.log("crossOffset", crossOffset);
  // console.log("isContainerPositioned", isContainerPositioned);
  // console.log("shouldOverlapWithTrigger", shouldOverlapWithTrigger);

  return calculatePositionInternal(
    placement,
    childOffset,
    overlaySize,
    scrollSize,
    margins,
    padding,
    shouldFlip,
    boundaryDimensions,
    containerOffsetWithBoundary,
    offset,
    crossOffset,
    isContainerPositioned,
    shouldOverlapWithTrigger
  );
}

import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import HundredEmoji from "@/components/custom/icons/hundredEmoji";
import ThumbDownEmoji from "@/components/custom/icons/thumbDownEmoji";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/slider";
import { Divider } from "@/components/ui/divider";

const SliderDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <Box className="bg-background-0 p-6 rounded-xl border border-outline-200 w-full max-w-[336px]">
          <Text size="xl" className="font-medium text-typography-900">
            How satisfied are you with gluestack?
          </Text>
          <Slider defaultValue={30} className="w-full mt-10">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box className="flex flex-row justify-between mt-4">
            <Icon as={ThumbDownEmoji} />
            <Icon as={HundredEmoji} />
          </Box>
        </Box>
      </Center>

      {examples?.length > 0 &&
        examples.map((Example: any, index: any) => {
          const isFunctionComponent = typeof Example.Code === "function"; // Check if Code is a function
          return (
            <Box
              key={index}
              className="p-6 border border-outline-200 rounded-lg m-6 bg-background-50 gap-6"
            >
              <Text>{Example.name}</Text>
              <Divider />
              <Center>
                {isFunctionComponent ? <Example.Code /> : Example.Code}
              </Center>
            </Box>
          );
        })}
    </ScrollView>
  );
};

export default SliderDemo;

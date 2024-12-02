import React from "react";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/select";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const SelectDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 px-6 bg-background-0">
        <Select>
          <SelectTrigger>
            <SelectInput placeholder="Select option" className="w-[240px]" />
            <SelectIcon as={ChevronDownIcon} className="mr-3" />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem
                label="Cross Platform Development"
                value="Cross Platform Development"
              />
              <SelectItem label="Backend Development" value="backend" />
            </SelectContent>
          </SelectPortal>
        </Select>
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

export default SelectDemo;

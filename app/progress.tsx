import React from "react";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/progress";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";

const ProgressDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 p-6 bg-background-0">
        <VStack className="bg-background-0 p-6 rounded-lg border border-outline-200 w-full max-w-[336px] shadow-hard-5">
          <Text size="xl" className="font-medium text-typography-900">
            Download in progress..
          </Text>
          <Progress value={40} size="xs" className="w-full mt-6 mb-2">
            <ProgressFilledTrack />
          </Progress>
          <Text size="sm" className="text-typography-800">
            40% complete..
          </Text>
        </VStack>
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

export default ProgressDemo;

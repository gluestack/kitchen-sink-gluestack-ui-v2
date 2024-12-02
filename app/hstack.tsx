import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/hstack";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

const HStackDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <HStack
          space="xl"
          className="items-center w-full max-w-[548px] p-6 h-full min-h-[364px]"
        >
          <Box className="grow-[1] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
          <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
          <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
        </HStack>
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

export default HStackDemo;

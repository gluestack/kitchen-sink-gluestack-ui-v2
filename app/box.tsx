import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { Divider } from "@/components/ui/divider";
import { examples } from "@/components/docs/examples/box";
import { Text } from "@/components/ui/text";

const BoxDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 px-6">
        <Box className="flex flex-col p-6 rounded-xl border-dashed border-[3px] border-outline-200 bg-background-50 max-w-[406px] w-full">
          <Box className="bg-background-0 h-[180px] self-stretch rounded-lg mb-6" />
          <Box className="bg-background-0 h-[40px] self-stretch rounded-lg" />
          <Box className="bg-background-0 h-[24px] my-3 self-stretch rounded-lg" />
          <Box className="bg-background-0 h-[24px] self-stretch rounded-lg" />
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

export default BoxDemo;

import React from "react";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/text";
import { Divider } from "@/components/ui/divider";

const TextDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 p-6 bg-background-0">
        <Box className="max-w-[600px]">
          <Text className="text-2xl font-semibold text-typography-900 mb-3">
            Your Notes
          </Text>
          <Text>
            This is a text. A text is a written or printed work that conveys
            information, ideas, thoughts, or emotions through language. It can
            take various forms, such as books, articles, essays, messages, and
            can serve multiple purposes, including communication, entertainment,
            etc. In a broader sense, a "text" refers to any coherent and
            meaningful collection of words that can be read and interpreted.
          </Text>
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

export default TextDemo;

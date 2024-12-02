import React from "react";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/textarea";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const TextAreaDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 p-6 bg-background-0">
        <Textarea className="items-start max-w-[400px]">
          <TextareaInput
            placeholder="Your text goes here..."
            textAlignVertical="top"
          />
        </Textarea>
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

export default TextAreaDemo;

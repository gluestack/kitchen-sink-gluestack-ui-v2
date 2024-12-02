import React from "react";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Icon, CircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/heading";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const HeadingDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 px-4">
        <VStack>
          <Heading size="4xl">Main Heading</Heading>
          <Heading size="lg" className="font-medium my-3">
            Description of the heading
          </Heading>
          <Heading size="xl" className="my-3">
            Sub Heading
          </Heading>
          <VStack space="sm">
            <HStack space="sm" className="items-center ml-2">
              <Icon
                as={CircleIcon}
                className="h-1.5 w-1.5 fill-typography-950"
              />
              <Heading size="sm" className="font-medium">
                List Item 1
              </Heading>
            </HStack>
            <HStack space="sm" className="items-center ml-2">
              <Icon
                as={CircleIcon}
                className="h-1.5 w-1.5 fill-typography-950"
              />
              <Heading size="sm" className="font-medium">
                List Item 2
              </Heading>
            </HStack>
            <HStack space="sm" className="items-center ml-2">
              <Icon
                as={CircleIcon}
                className="h-1.5 w-1.5 fill-typography-950"
              />
              <Heading size="sm" className="font-medium">
                List Item 3
              </Heading>
            </HStack>
          </VStack>
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

export default HeadingDemo;

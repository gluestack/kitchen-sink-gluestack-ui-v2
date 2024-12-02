import React from "react";
import { Center } from "@/components/ui/center";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { ScrollView } from "@/components/ui/scroll-view";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { examples } from "@/components/docs/examples/card";

const CardDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <Card className="max-w-[352px] flex flex-col p-4 border border-outline-200 rounded-lg shadow-soft-1">
          <Image
            source={{
              uri: "https://i.imgur.com/yL7VSbU.png",
            }}
            alt="random"
            className="w-full aspect-[352/234] rounded"
            // @ts-ignore
            size="none"
          />
          <Text size="sm" className="mt-4 mb-2">
            May 15, 2023
          </Text>
          <Heading size="md">The Power of Positive Thinking</Heading>
          <Text size="sm" className="mt-2.5 line-clamp-2">
            Discover how the power of positive thinking can transform your life,
            boost your confidence, and help you overcome challenges. Explore
            practical tips and techniques to cultivate a positive mindset for
            greater happiness and success.
          </Text>
        </Card>
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

export default CardDemo;

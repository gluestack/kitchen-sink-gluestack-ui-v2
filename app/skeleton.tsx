import React from "react";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/skeleton";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const SkeletonDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <VStack space="lg" className="w-full max-w-[352px]">
          <HStack space="xl" className="w-full">
            <VStack space="sm" className="flex-1">
              <Skeleton
                className="w-full h-[84px]"
                variant="rounded"
                speed={4}
              />
              <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
              <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
            </VStack>
            <VStack space="sm" className="flex-1">
              <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
              <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
              <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
              <Skeleton
                className="w-full h-[52px]"
                variant="rounded"
                speed={4}
              />
            </VStack>
          </HStack>
          <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
          <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
          <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
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

export default SkeletonDemo;

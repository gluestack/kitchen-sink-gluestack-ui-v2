import React from "react";
import { Divider } from "@/components/ui/divider";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/divider";

const DividerDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 px-6">
        <VStack className="w-full max-w-[400px]">
          <HStack className="gap-2.5">
            <Text className="font-semibold">Your Contacts</Text>
            <Box className="bg-background-50 px-2.5 py-1 rounded-full">
              <Text size="xs" className="text-typography-900">
                240
              </Text>
            </Box>
          </HStack>
          <VStack className="mt-7">
            <HStack space="sm" className="items-center mx-2">
              <Avatar className="h-9 w-9">
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1611178206064-2ae27f72b9ca?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
              </Avatar>
              <Text>Alice</Text>
            </HStack>
            <Divider className="my-2" />
            <HStack space="sm" className="items-center mx-2">
              <Avatar className="h-9 w-9">
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
              </Avatar>
              <Text>Brandon</Text>
            </HStack>
            <Divider className="my-2" />
            <HStack space="sm" className="items-center mx-2">
              <Avatar className="h-9 w-9">
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
              </Avatar>
              <Text>Carl</Text>
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

export default DividerDemo;

import React from "react";
import { Link, LinkText } from "@/components/ui/link";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Twitter, Youtube } from "lucide-react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/link";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const LinkDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <HStack className="gap-10 w-full max-w-[336px] p-6 bg-background-50 rounded-full justify-center">
          <Link
            href="https://x.com/gluestack"
            isExternal
            className="flex flex-row justify-center items-center gap-2"
          >
            <Icon
              size="xl"
              as={Twitter}
              className="text-info-800 fill-info-800"
            />
            <LinkText className="no-underline">Twitter</LinkText>
          </Link>
          <Link
            href="https://www.youtube.com/@GeekyAnts"
            isExternal
            className="flex flex-row justify-center items-center gap-2"
          >
            <Icon size="xl" as={Youtube} className="text-info-800" />
            <LinkText className="no-underline">Youtube</LinkText>
          </Link>
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

export default LinkDemo;

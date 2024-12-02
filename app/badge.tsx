import React from "react";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { GlobeIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { examples } from "@/components/docs/examples/badge";
import { Text } from "@/components/ui/text";

const BadgeDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <Badge>
          <BadgeText>Verified</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>
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

export default BadgeDemo;

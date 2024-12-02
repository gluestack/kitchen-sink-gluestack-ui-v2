import React from "react";
import colors from "tailwindcss/colors";
import { Switch } from "@/components/ui/switch";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/switch";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";

const SwitchDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <HStack
          className="bg-background-0 px-10 py-5 rounded-full border border-outline-100 shadow-hard-5 items-center justify-center"
          space="xl"
        >
          <Text size="lg">Enable Notification</Text>
          <Switch
            size="lg"
            trackColor={{
              false: colors.neutral[300],
              true: colors.neutral[600],
            }}
            thumbColor={colors.neutral[50]}
            // @ts-ignore
            activeThumbColor={colors.neutral[50]}
            ios_backgroundColor={colors.neutral[300]}
          />
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

export default SwitchDemo;

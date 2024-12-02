import React from "react";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Portal } from "@/components/ui/portal";
import { CloseIcon } from "@/components/ui/icon";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/portal";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";

const PortalDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const [slot, setSlot] = React.useState("12");

  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <VStack className="max-w-[336px] w-full" space="md">
          <VStack className="border border-outline-200 rounded-xl p-3">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=3866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              alt="image"
              className="w-full aspect-[312/173] rounded"
              size="none"
            />
            <Text className="mt-6 mb-2">2 shows available on 15 May</Text>
            <Heading>The Sinbad Movie</Heading>
          </VStack>
          <Button onPress={() => setVisible(true)}>
            <ButtonText>Open Portal</ButtonText>
          </Button>
        </VStack>

        <Portal
          isOpen={visible}
          //@ts-ignore
          className={`justify-center items-center ${visible ? "bg-background-dark/60" : ""}`}
        >
          <VStack className="max-w-[324px] w-full p-4 bg-background-0 shadow-hard-5 rounded-lg border border-outline-300 justify-between">
            <HStack className="justify-between items-center">
              <Text className="text-typography-900 font-semibold">
                Choose a slot
              </Text>
              <Button
                size="sm"
                variant="link"
                onPress={() => setVisible(false)}
              >
                <ButtonIcon as={CloseIcon} />
              </Button>
            </HStack>

            <Text className="mt-2 mb-4" size="sm">
              <Text className="font-semibold" size="sm">
                The Sinbad Movie:{" "}
              </Text>
              Legend of the Seven Seas (also known as simply Sinbad) is a 2003
              American animated adventure film produced by DreamWorks Animation
            </Text>

            <ButtonGroup space="md" className="flex flex-row">
              <Button
                variant={slot === "11" ? "solid" : "outline"}
                onPress={() => {
                  if (slot !== "11") {
                    setSlot("11");
                  }
                }}
                size="xs"
              >
                <ButtonText>11:30 AM</ButtonText>
              </Button>
              <Button
                variant={slot === "12" ? "solid" : "outline"}
                onPress={() => {
                  if (slot !== "12") {
                    setSlot("12");
                  }
                }}
                size="xs"
              >
                <ButtonText>12:45 PM</ButtonText>
              </Button>
            </ButtonGroup>
          </VStack>
        </Portal>
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

export default PortalDemo;

import React from "react";
import {
  ButtonGroup,
  Button,
  ButtonText,
  ButtonIcon,
} from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { LogOut } from "lucide-react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { examples } from "@/components/docs/examples/button";

const ButtonDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Box className="p-6 border border-outline-200 rounded-lg m-6 bg-background-50 gap-6">
        <Text>Basic Example</Text>
        <Divider />
        <Center>
          <ButtonGroup className="flex flex-col">
            <Button className="gap-2">
              <ButtonText>Log Out</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
            <Button className="gap-2" variant="outline">
              <ButtonText>Log Out</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
            <Button className="gap-2" variant="link">
              <ButtonText>Log Out</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </ButtonGroup>
        </Center>
      </Box>

      {examples?.length &&
        examples.map((Example: any, index: any) => {
          return (
            <Box
              key={index}
              className="p-6 border border-outline-200 rounded-lg m-6 bg-background-50 gap-6"
            >
              <Text>{Example.name}</Text>
              <Divider />
              <Center>{Example.Code}</Center>
            </Box>
          );
        })}
    </ScrollView>
  );
};

export default ButtonDemo;

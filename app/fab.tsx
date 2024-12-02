import React from "react";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Box } from "@/components/ui/box";
import { Icon, HelpCircleIcon, ExternalLinkIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/fab";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

const FabDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0">
        <Menu
          offset={5}
          placement="top right"
          trigger={({ ...triggerProps }) => {
            return (
              <Box className="h-[200px] w-[250px] bg-background-0 rounded-lg border border-outline-200 shadow-hard-5">
                <Fab placement={"bottom right"} {...triggerProps}>
                  <FabIcon as={HelpCircleIcon} />
                </Fab>
              </Box>
            );
          }}
        >
          <MenuItem key="help" textValue="help" className="p-3 justify-between">
            <MenuItemLabel size="sm">Visit Help</MenuItemLabel>
            <Icon as={ExternalLinkIcon} size="sm" className="ml-2" />
          </MenuItem>
          <MenuSeparator />
          <MenuItem key="privacy" textValue="privacy" className="p-3">
            <MenuItemLabel size="sm">Privacy Policy</MenuItemLabel>
          </MenuItem>
          <MenuItem key="ads" textValue="ads" className="p-3">
            <MenuItemLabel size="sm">Personalized Ads</MenuItemLabel>
          </MenuItem>
          <MenuItem key="terms" textValue="terms" className="p-3">
            <MenuItemLabel size="sm">Terms</MenuItemLabel>
          </MenuItem>
        </Menu>
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

export default FabDemo;

import React from "react";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Icon, GlobeIcon, PlayIcon, SettingsIcon, AddIcon } from "@/components/ui/icon";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/menu";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const MenuDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <Menu
          placement="top"
          offset={5}
          disabledKeys={["Settings"]}
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Menu</ButtonText>
              </Button>
            );
          }}
        >
          <MenuItem key="Add account" textValue="Add account">
            <Icon as={AddIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Add account</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Community" textValue="Community">
            <Icon as={GlobeIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Community</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins">
            <Icon as={PlayIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Plugins</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Settings" textValue="Settings">
            <Icon as={SettingsIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Settings</MenuItemLabel>
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

export default MenuDemo;

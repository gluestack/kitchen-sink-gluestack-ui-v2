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

const FabDemo = () => {
  return (
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
  );
};

export default FabDemo;

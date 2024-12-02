import React from "react";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { CheckIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/toast";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const ToastDemo = () => {
  const toast = useToast();
  const [toastId, setToastId] = React.useState("0");
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random().toString();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            className="flex flex-row gap-2 mx-2 android:mt-[56px]"
            variant="outline"
            action="success"
          >
            <Icon as={CheckIcon} className="mt-[3px] text-success-800" />
            <VStack>
              <ToastTitle>Completed!</ToastTitle>
              <ToastDescription>File Submitted Successfully.</ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <Button onPress={handleToast}>
          <ButtonText>Show Toast</ButtonText>
        </Button>
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

export default ToastDemo;

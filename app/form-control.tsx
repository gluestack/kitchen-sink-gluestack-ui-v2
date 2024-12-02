import React from "react";
import {
  FormControl,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/form-control";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

const FormControlDemo = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [isInvalid2, setIsInvalid2] = React.useState(false);
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleChangePassword = () => {
    if (inputValue1?.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    if (inputValue2 !== inputValue1) {
      setIsInvalid2(true);
    } else {
      setIsInvalid2(false);
    }
  };
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 p-6 bg-background-0">
        <Center className="rounded-xl border border-outline-200 bg-background-0 p-6 w-full max-w-[336px]">
          <FormControl isInvalid={isInvalid} className="w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">
                Enter Password
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type={showPassword1 ? "text" : "password"}
                value={inputValue1}
                onChangeText={(text) => setInputValue1(text)}
              />
              <InputSlot
                onPress={() => setShowPassword1(!showPassword1)}
                className="mr-3"
              >
                <InputIcon as={showPassword1 ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

            <FormControlHelper>
              <FormControlHelperText size="xs">
                Must be atleast 6 characters.
              </FormControlHelperText>
            </FormControlHelper>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText size="xs">
                Atleast 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl isInvalid={isInvalid2} className="mt-6 w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">
                Confirm Password
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type={showPassword2 ? "text" : "password"}
                value={inputValue2}
                onChangeText={(text) => setInputValue2(text)}
              />
              <InputSlot
                onPress={() => setShowPassword2(!showPassword2)}
                className="mr-3"
              >
                <InputIcon as={showPassword2 ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

            <FormControlHelper>
              <FormControlHelperText size="xs">
                Must be same as password.
              </FormControlHelperText>
            </FormControlHelper>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText size="xs">
                Passwords do not match.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Button
            className="mt-8 w-full"
            size="sm"
            onPress={handleChangePassword}
          >
            <ButtonText>Change Password</ButtonText>
          </Button>
        </Center>
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
export default FormControlDemo;

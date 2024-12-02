import React from "react";
import { EyeIcon, EyeOffIcon, SearchIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { FormControl } from "@/components/ui/form-control";
import { Button, ButtonText } from "@/components/ui/button";
export const examples = [

    {
      name: "Input type password with FormControl",
      Code: function App() { const [showPassword, setShowPassword] = React.useState(false); const handleState = () =>{ setShowPassword((showState) =>{ return !showState; }); }; return (<FormControl className='p-4 border rounded-lg border-outline-300' ><VStack space='xl'><Heading className='text-typography-900 leading-3'>Login</Heading><VStack space='xs'><Text className='text-typography-500 leading-1'>Email</Text><Input><InputField type="text" /></Input></VStack><VStack space='xs'><Text className='text-typography-500 leading-1'>Password</Text><Input className='text-center'><InputField type={showPassword ? 'text' : 'password'} /><InputSlot className='pr-3' onPress={handleState}><InputIcon as={showPassword ? EyeIcon : EyeOffIcon} className='text-darkBlue-500' /></InputSlot></Input></VStack><Button className='ml-auto' onPress={()=>{ setShowModal(false); }} ><ButtonText className='text-typography-0'>Save</ButtonText></Button></VStack></FormControl>); }
    },

    {
      name: "Input with Icons",
      Code: <Input><InputSlot className='pl-3'><InputIcon as={SearchIcon}/></InputSlot><InputField placeholder="Search..." /></Input>
    }
];
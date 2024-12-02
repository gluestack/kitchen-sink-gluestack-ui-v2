import { RefreshCw, Send } from "lucide-react-native";
import React from "react";
import { Icon, CloseIcon, HelpCircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText, ButtonGroup } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
export const examples = [

    {
      name: "Toast in note talking platform",
      Code: function Example() { const toast = useToast(); const [toastId, setToastId] = React.useState(0); const handleToast = () =>{ if (!toast.isActive(toastId)) { showNewToast(); } }; const showNewToast = () =>{ const newId = Math.random(); setToastId(newId); toast.show({ id: newId, placement: 'top', duration: 3000, render: ({ id }) =>{ const uniqueToastId = "toast-" + id; return (<Toast action="error" variant="outline" nativeID={uniqueToastId} className="p-4 gap-6 border-error-500 w-full shadow-hard-5 max-w-[443px] flex-row justify-between" ><HStack space="md"><Icon as={HelpCircleIcon} className="stroke-error-500 mt-0.5" /><VStack space="xs"><ToastTitle className="font-semibold text-error-500">Error!</ToastTitle><ToastDescription size="sm">Something went wrong.</ToastDescription></VStack></HStack><HStack className="min-[450px]:gap-3 gap-1"><Button variant="link" size="sm" className="px-3.5 self-center"><ButtonText>Retry</ButtonText></Button><Pressable onPress={() =>toast.close(id)}><Icon as={CloseIcon} /></Pressable></HStack></Toast>); }, }); }; return (<Button onPress={handleToast}><ButtonText>Press Me</ButtonText></Button>); }
    },

    {
      name: "Social media notification",
      Code: function Example() { const toast = useToast(); return (<Button onPress={() =>{ toast.show({ placement:"top", render: ({ id }) =>{ const toastId = "toast-" + id; return (<Toast nativeID={toastId} className="p-4 gap-3 w-full sm:min-w-[386px] bg-background-0 shadow-hard-2 flex-row" ><Avatar><AvatarFallbackText>JS</AvatarFallbackText><AvatarImage source={{ uri: 'https://s3-alpha-sig.figma.com/img/cc35/9a95/ecf9cba1881effe726061fc6f4809371?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pyj83N4SzedRQj~mtWMGxuhBcBMcuGc6ppsgWMnKDu2iEEcD-NQaE2WHgwqq6k7uHxzBd~gecQN2HXDrkVTlxvryARvD8Ai5RkaicN8OdqqHojHdmT8y1Q1IPKjSf0HxHA0EgkkTS8RLqRXBwrXV6IaGsVKNxche92mdvCt0llYhzeQO0xLYOYIDUiOXONpcpP72QgRMZLbU3Ep2thUnwl6VuxFiphQPOKkLLUEeGhQF5KDQB71NG09Ypq2V3okej6dtPb0eo~IunDKiFIfDUwrj~2fD6Y~JRrVhmSIXloZlAPwCd37NwzT-Jl8pR4JIWqF4dRigx67HOSUExrezJg__', }} /></Avatar><VStack className="w-full"><HStack className="justify-between w-full"><Heading size="sm" className="text-typography-950 font-semibold" >Jacob Steve</Heading><Text size="sm" className="text-typography-500">2m ago</Text></HStack><Text size="sm" className="text-typography-500">commented on your photo</Text></VStack></Toast>); }, }); }} ><ButtonText>Show Toast</ButtonText></Button>); }
    },

    {
      name: "Software update toast",
      Code: function Example() { const toast = useToast(); const [toastId, setToastId] = React.useState(0); const handleToast = () =>{ if (!toast.isActive(toastId)) { showNewToast(); } }; const showNewToast = () =>{ const newId = Math.random(); setToastId(newId); toast.show({ id: newId, placement: 'top', duration: 3000, render: ({ id }) =>{ const uniqueToastId = "toast-" + id; return (<Toast nativeID={uniqueToastId} className="p-4 gap-4 w-full max-w-[386px] bg-background-0 shadow-hard-2 flex-row" ><Box className="h-11 w-11 items-center justify-center hidden min-[400px]:flex bg-background-50"><Icon as={RefreshCw} size="xl" className="stroke-background-800" /></Box><VStack space="xl"><VStack space="xs"><HStack className="justify-between"><ToastTitle className="text-typography-900 font-semibold">Update available</ToastTitle><Pressable onPress={() =>toast.close(id)}><Icon as={CloseIcon} className="stroke-background-500" /></Pressable></HStack><ToastDescription className="text-typography-700">A new software version is available for download.</ToastDescription></VStack><ButtonGroup className="gap-3 flex-row"><Button action="secondary" variant="outline" size="sm" className="flex-grow" ><ButtonText>Not now</ButtonText></Button><Button size="sm" className="flex-grow"><ButtonText>Update</ButtonText></Button></ButtonGroup></VStack></Toast>); }, }); }; return (<Button onPress={handleToast}><ButtonText>Press Me</ButtonText></Button>); }
    },

    {
      name: "Message sent toast",
      Code: function Example() { const toast = useToast(); return (<Button onPress={() =>{ toast.show({ placement:"top", render: ({ id }) =>{ const toastId = "toast-" + id; return (<Toast nativeID={toastId} className="px-5 py-3 gap-4 shadow-soft-1 items-center flex-row" ><Icon as={Send} size="xl" className="fill-typography-100 stroke-none" /><Divider orientation="vertical" className="h-[30px] bg-outline-200" /><ToastTitle size="sm">Message sent successfully</ToastTitle></Toast>); }, }); }} ><ButtonText>Show Toast</ButtonText></Button>); }
    }
];
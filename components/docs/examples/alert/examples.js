export const examples = [

    {
      name: "Alert with CTA",
      Code: <Alert action="success" className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center" ><VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center"><AlertText className="font-semibold text-typography-900" size="sm">Verify your phone number to create an API key</AlertText><Button size="sm"><ButtonText>Start verification</ButtonText></Button></VStack><Icon as={CloseIcon} /></Alert>
    },

    {
      name: "Alert on cloud sync",
      Code: <Alert action="warning" className="gap-4 max-w-[516px] w-full flex-row flex py-4 items-start self-center" ><AlertIcon as={RepeatIcon} className="mt-1" /><HStack className="justify-between flex-1 items-center gap-1 sm:gap-8"><VStack className="flex-1"><Text className="font-semibold text-typography-900">Sync is disabled</Text><AlertText className="text-typography-900" size="sm">Enable cloud sync to help safeguard your data</AlertText></VStack><Button size="xs"><ButtonText>Turn on</ButtonText></Button></HStack></Alert>
    },

    {
      name: "Warning alert",
      Code: <Alert action="error" className="gap-3"><AlertIcon as={Bomb} size="lg" /><AlertText className="text-typography-900" size="sm"><Text className="mr-2 font-semibold text-typography-900">Heads up:</Text>Once done, this action cannot be undone</AlertText></Alert>
    },

    {
      name: "Alert on confirm password modal",
      Code: function Example() { const [showPassword, setShowPassword] = React.useState(false); const handleState = () =>{ setShowPassword((showState) =>{ return !showState; }); }; return (<VStack className="gap-5 sm:gap-8 p-6 sm:p-9 border border-outline-200 bg-background-0 rounded-xl shadow-hard-5 w-full max-w-[423px]"><VStack className="items-center gap-1"><Heading size="xl">Confirm our password?</Heading><Text>johnsmith@gmail.com</Text></VStack><VStack className="gap-3 sm:gap-5"><Input className="rounded-md" size="sm"><InputField type={showPassword ? 'text' : 'password'} placeholder="Enter password" /><InputSlot className="mr-3" onPress={handleState}><InputIcon size="xs" as={showPassword ? EyeIcon : EyeOffIcon} className="stroke-background-600" /></InputSlot></Input><Button className="w-full rounded-md" size="sm"><ButtonText>Confirm</ButtonText></Button></VStack><Alert className="items-start" action="muted"><AlertIcon as={InfoIcon} size="xs" className="stroke-background-500" /><AlertText className="text-typography-600" size="xs">Minimum 8 characters, with at least 1 uppercase, 1 lowercase, and 1 number required.</AlertText></Alert></VStack>); }
    }
];
export const examples = [

    {
      name: "Value",
      Code: <VStack space="lg"><Text size="lg">Downloading 55%</Text><Progress value={55} className='w-80 h-1'><ProgressFilledTrack className='h-1' /></Progress></VStack>
    },

    {
      name: "Color",
      Code: <VStack space="3xl"><Progress value={46} className='w-96 h-2' size="sm"><ProgressFilledTrack className='bg-emerald-600'/></Progress><Progress value={46} className='w-96 h-2' size="sm"><ProgressFilledTrack className='bg-amber-600'/></Progress><Progress value={46} className='w-96 h-2' size="sm"><ProgressFilledTrack className='bg-fuchsia-600'/></Progress><Progress value={46} className='w-96 h-2' size="sm"><ProgressFilledTrack className='bg-cyan-600'/></Progress></VStack>
    },

    {
      name: "Custom",
      Code: <VStack space="lg"><Heading>Internal Storage</Heading><Progress value={46} className='w-[410px] h-2 bg-lime-100'><ProgressFilledTrack className='h-2 bg-lime-500' /></Progress><Text size="md">14GB</Text></VStack>
    }
];
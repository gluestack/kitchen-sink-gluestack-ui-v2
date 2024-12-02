export const examples = [

    {
      name: "Pressable child elements according to its states",
      Code: <Pressable className="p-16 bg-primary-500">{({ pressed }) =>(<Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>PRESSABLE</Text>)}</Pressable>
    }
];
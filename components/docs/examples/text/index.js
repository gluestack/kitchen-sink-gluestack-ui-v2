import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
export const examples = [

    {
      name: "Text Sizes",
      Code: function App() { const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', ]; return (<Center>{sizes.map((size, index) =>(<Text size={size} key={index} className="text-center">{size}</Text>))}</Center>); }
    }
];
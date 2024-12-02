import { ArrowUpRight } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
export const examples = [

    {
      name: "Default",
      Code: <HStack><Text size="lg" >Design inspiration from</Text><Link href="https://gluestack.io/" isExternal><LinkText size="lg">pinterest.com</LinkText></Link></HStack>
    },

    {
      name: "Link with icon",
      Code: <HStack><Text size="lg">Go to</Text><Link href="https://gluestack.io/" isExternal><HStack alignItems="center"><LinkText size="lg">Pinterest</LinkText><Icon as={ArrowUpRight} size="lg" className='mt-0.5 text-info-600'/></HStack></Link></HStack>
    },

    {
      name: "Basic Unitools Link",
      Code: <Link href="https://gluestack.io/"><Text>gluestack</Text></Link>
    }
];
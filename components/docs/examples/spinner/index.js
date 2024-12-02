import colors from "tailwindcss/colors";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Spinner } from "@/components/ui/spinner";
import { HStack } from "@/components/ui/hstack";
export const examples = [

    {
      name: "Spinner with Label",
      Code: <HStack space="sm" ><Spinner/><Text size="md">Please Wait</Text></HStack>
    },

    {
      name: "Color Scheme",
      Code: <VStack space="md" ><Spinner color={colors.indigo[600]} /><Spinner color={colors.emerald[600]} /><Spinner color={colors.amber[600]} /><Spinner color={colors.fuchsia[600]} /></VStack>
    }
];
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { componentsList } from "@/utils/list";
import { ScrollView } from "@/components/ui/scroll-view";
import { Grid, GridItem } from "@/components/ui/grid";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { cssInterop } from "nativewind";
import { ColorModeContext } from "./_layout";

cssInterop(SafeAreaView, { className: "style" });

const ComponentCard = ({ component, onPress }: any) => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <Pressable
      className={`flex-1 sm:p-3 p-2 rounded-lg bg-background-0 w-full max-w-[400px] h-full aspect-[4/3] sm:gap-2 gap-1 flex flex-col ${colorMode === "light" ? "shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)]" : "shadow-soft-1 border border-outline-50"}`}
      onPress={onPress}
      // style={{  //shadow-hard-5
      //   shadowColor: "rgb(38,38,38)",
      //   shadowOffset: {
      //     width: 0,
      //     height: 2,
      //   },
      //   shadowOpacity: 0.1,
      //   shadowRadius: 10,

      //   elevation: 10,
      // }}
    >
      <Box className="flex-1 rounded-lg bg-background-50 sm:p-4 p-2">
        <Image
          source={{
            uri: colorMode === "light" ? component.url : component.darkUrl,
          }}
          alt={component.title}
          size="none"
          className={`flex-1 rounded shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
        />
      </Box>
      <Text className="text-typography-900 font-medium sm:text-base text-sm ml-1">
        {component.title}
      </Text>
    </Pressable>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-0 relative">
      <ScrollView className="flex-1">
        <Grid
          className="gap-3 sm:gap-5 sm:p-6 p-4 max-w-[1600px] mx-auto"
          _extra={{
            className: "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4",
          }}
        >
          {componentsList.map((component, index) => (
            <GridItem key={index} _extra={{ className: "col-span-1" }}>
              <ComponentCard
                component={component}
                //@ts-ignore
                onPress={() => router.push(component.link)}
              />
            </GridItem>
          ))}
        </Grid>
      </ScrollView>
    </SafeAreaView>
  );
}

import React from "react";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Grid, GridItem } from "@/components/ui/grid";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/image-viewer";
import { Box } from "@/components/ui/box";

const images = [
  {
    id: 1,
    url: "https://i.imgur.com/vFNOeCn.png",
  },
  {
    id: 2,
    url: "https://i.imgur.com/8ng85b5.png",
  },
  {
    id: 3,
    url: "https://i.imgur.com/cyRKjHI.png",
  },
  {
    id: 4,
    url: "https://i.imgur.com/nzclOpJ.png",
  },
  {
    id: 5,
    url: "https://i.imgur.com/3IOgIev.png",
  },
  {
    id: 6,
    url: "https://i.imgur.com/FpTI9UX.png",
  },
  {
    id: 7,
    url: "https://i.imgur.com/QZu77gP.png",
  },
  {
    id: 8,
    url: "https://i.imgur.com/FO1F4tR.png",
  },
];

const ImageDemo = () => {
  return (
    <ScrollView
      className={`bg-background-0 ${examples?.length > 0 ? "" : "web:justify-center"}`}
      contentContainerClassName="px-3 pb-6"
    >
      <Box className="p-5 rounded-lg m-3 mt-5 bg-background-50 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
        <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
          Default
        </Text>
        <Center className="flex-1">
          <VStack className=" max-w-[304px] w-full" space="sm">
            <Text className="self-start text-typography-500" size="sm">
              Sunday 27 Oct
            </Text>
            <Grid
              className="gap-2"
              _extra={{
                className: "grid-cols-3",
              }}
            >
              {images.map((image) => {
                return (
                  <GridItem
                    key={image.id}
                    className="max-w-[96px] max-h-[96px] h-full w-full"
                    _extra={{
                      className: "col-span-1",
                    }}
                  >
                    <Image
                      source={{ uri: image.url }}
                      alt="image"
                      size="none"
                      className="aspect-[1/1] w-full rounded"
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </VStack>
        </Center>
      </Box>

      {examples?.length > 0 &&
        examples.map((Example: any, index: any) => {
          const isFunctionComponent = typeof Example.Code === "function"; // Check if Code is a function
          return (
            <Box
              key={index}
              className="p-5 border border-outline-100 rounded-lg my-2.5 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center"
            >
              <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
                {Example.name}
              </Text>
              <Center className="flex-1">
                {isFunctionComponent ? <Example.Code /> : Example.Code}
              </Center>
            </Box>
          );
        })}
    </ScrollView>
  );
};

export default ImageDemo;

import { Text } from "@/components/ui/text";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/image-viewer";
import { Box } from "@/components/ui/box";
import {
  ImageViewer,
  ImageViewerBackdrop,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerImage,
} from "@/components/ui/image-viewer";
import { CloseIcon, Icon } from "@/components/ui/icon";
import React from "react";
import { Pressable, Image, Platform } from "react-native";
import { Center } from "@/components/ui/center";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const Images = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/young-boy-learning-how-ride-horse_23-2150460636.jpg",
    },
  ];
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
          <Pressable
            onPress={() => {
              setVisible(true);
            }}
          >
            <Image
              source={{ uri: Images[0].url }}
              className="w-[200px] h-[200px]"
              resizeMode="cover"
            />
          </Pressable>
          <ImageViewer
            isOpen={visible}
            onClose={() => {
              setVisible(false);
            }}
            presentationStyle="overFullScreen"
          >
            
            <ImageViewerBackdrop>
              <ImageViewerContent
                images={Images}
                renderImages={({ item, index }) => (
                  <ImageViewerImage source={{ uri: item.url }} />
                )}
                keyExtractor={(item, index) => item.id + "-" + index}
              >
                {Platform.OS === "web" && (
                  <ImageViewerCloseButton>
                    <Icon as={CloseIcon} className="text-secondary-500" />
                  </ImageViewerCloseButton>
                )}
              </ImageViewerContent>
            </ImageViewerBackdrop>
          </ImageViewer>
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

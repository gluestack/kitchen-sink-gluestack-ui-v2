import React from "react";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";

import {
  ImageViewer,
  ImageViewerImage,
  ImageViewerCloseButton,
  ImageViewerBackdrop,
  ImageViewerContent,
} from "@/components/ui/image-viewer";

import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Platform } from "react-native";
export const examples = [
  {
    name: "Basic ImageViewer",
    Code: function App() {
      const [visible, setVisible] = React.useState(false);
      const Images = [{ id: 1, url: "https://picsum.photos/1000/1000" }];
      return (
        <Center>
          <Pressable onPress={() => setVisible(true)}>
            <Image
              source={{ uri: Images[0].url }}
              className="w-[200px] h-[200px]"
              resizeMode="contain"
            />
          </Pressable>
          <ImageViewer isOpen={visible} onClose={() => setVisible(false)}>
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
                    <Icon as={CloseIcon} />
                  </ImageViewerCloseButton>
                )}
              </ImageViewerContent>
            </ImageViewerBackdrop>
          </ImageViewer>
        </Center>
      );
    },
  },
];

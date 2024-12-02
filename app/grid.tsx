import React from "react";
import { Center } from "@/components/ui/center";
import { Grid, GridItem } from "@/components/ui/grid";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/grid";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const GridDemo = () => {
  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-typography-0 p-6">
        <Grid
          className="gap-4 max-w-[600px]"
          _extra={{
            className: "grid-cols-2",
          }}
        >
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
          <GridItem
            className="border border-dashed border-outline-400 rounded-lg h-[68px]"
            _extra={{
              className: "col-span-1",
            }}
          />
        </Grid>
      </Center>
      {examples?.length > 0 &&
        examples.map((Example: any, index: any) => {
          const isFunctionComponent = typeof Example.Code === "function"; // Check if Code is a function
          return (
            <Box
              key={index}
              className="p-6 border border-outline-200 rounded-lg m-6 bg-background-50 gap-6"
            >
              <Text>{Example.name}</Text>
              <Divider />
              <Center>
                {isFunctionComponent ? <Example.Code /> : Example.Code}
              </Center>
            </Box>
          );
        })}
    </ScrollView>
  );
};

export default GridDemo;

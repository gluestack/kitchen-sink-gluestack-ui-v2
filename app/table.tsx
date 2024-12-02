import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableData,
} from "@/components/ui/table";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { CloseIcon, CheckIcon, InfoIcon } from "@/components/ui/icon";
import { Platform } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/table";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

const TableDemo = () => {
  const nativeProp = Platform.OS !== "web" ? { useRNView: true } : {};

  return (
    <ScrollView className="bg-background-0">
      <Center className="flex-1 bg-background-0 p-6">
        <Box className="w-full rounded-xl border border-outline-300 overflow-hidden max-w-[500px]">
          <Box className="overflow-x-scroll">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableData>Rajesh</TableData>
                  <TableData>VII</TableData>
                  <TableData {...nativeProp}>
                    <Badge
                      size="sm"
                      variant="solid"
                      action="success"
                      className="self-start w-fit"
                    >
                      <BadgeIcon as={CheckIcon} className="mr-2" />
                      <BadgeText>Success</BadgeText>
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Ravi</TableData>
                  <TableData>IX</TableData>
                  <TableData {...nativeProp}>
                    <Badge
                      size="sm"
                      variant="solid"
                      action="warning"
                      className="self-start w-fit"
                    >
                      <BadgeIcon as={InfoIcon} className="mr-2" />
                      <BadgeText>Pending</BadgeText>
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow className="border-none">
                  <TableData>Ananya</TableData>
                  <TableData>X</TableData>
                  <TableData {...nativeProp}>
                    <Badge
                      size="sm"
                      variant="solid"
                      action="error"
                      className="self-start w-fit"
                    >
                      <BadgeIcon as={CloseIcon} className="mr-2" />
                      <BadgeText>Failed</BadgeText>
                    </Badge>
                  </TableData>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
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

export default TableDemo;

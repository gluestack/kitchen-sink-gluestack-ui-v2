import React, { useState } from "react";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { examples } from "@/components/docs/examples/checkbox";
import { ScrollView } from "@/components/ui/scroll-view";
import { Divider } from "@/components/ui/divider";

const initialTodoList = [
  { id: 1, label: "Feed Tommy", isDone: false },
  { id: 2, label: "Buy milk and eggs", isDone: false },
  { id: 3, label: "Yoga with matty", isDone: false },
];

const CheckboxDemo = () => {
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleCheckboxChange = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <>
      <ScrollView className="bg-background-0">
        <Center className="flex-1 bg-background-0">
          <Box className="flex flex-col gap-4">
            <Text size="xl" className="font-semibold text-typography-900">
              To-do List
            </Text>

            {todoList.map((todo) => (
              <Checkbox
                key={todo.id}
                value={todo.id.toString()}
                isChecked={todo.isDone}
                onChange={() => handleCheckboxChange(todo.id)}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel
                  className={`${todo.isDone ? "line-through" : ""}`}
                >
                  {todo.label}
                </CheckboxLabel>
              </Checkbox>
            ))}
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
    </>
  );
};

export default CheckboxDemo;

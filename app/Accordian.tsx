import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { ScrollView } from "@/components/ui/scroll-view";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react-native";

const AccordionDemo = () => {
  const accRef = React.useRef(null);
  return (
    <ScrollView contentContainerStyle={{ maxHeight: 50 }}>
      <Accordion className="border border-outline-200">
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {(states: any) => (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {states.isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ref={accRef}>
            <AccordionContentText>
              You can place your order by clicking the "Order Now" button.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <Divider />
        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }: { isExpanded: boolean }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              We accept Visa, Mastercard, and American Express.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollView>
  );
};

export default AccordionDemo;

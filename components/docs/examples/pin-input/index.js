import React from "react";
import { PinInput, PinInputField } from "@/components/ui/pin-input";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
export const examples = [
  {
    name: "PinInput with caption",
    Code: function App() {
      const [value, setValue] = React.useState("");
      React.useEffect(() => {
        console.log(value);
      }, [value]);
      return (
        <FormControl className="gap-4">
          <FormControlLabel>
            <FormControlLabelText>Enter OTP</FormControlLabelText>
          </FormControlLabel>
          <PinInput value={value} onChange={setValue} numberOfFields={4}>
            {Array.from({ length: 4 }).map((_, index) => (
              <PinInputField key={index} index={index} />
            ))}
          </PinInput>
        </FormControl>
      );
    },
  },
];

import React from "react";
import { PinInput, PinInputField } from "@/components/ui/pin-input";
import { FormControl, FormControlLabel } from "@/components/ui/form-control";

export const examples = [
  {
    name: "PinInput with caption",
    Code: function App(){ const [value, setValue] = React.useState(''); React.useEffect(() =>{ console.log(value); }, [value]); return (<FormControl className="gap-4"><FormControlLabel className="pl-2">Enter OTP</FormControlLabel><PinInput value={value} onChange={setValue}>{Array.from({ length: 4 }).map((_, index) =>(<PinInputField key={index} />))}</PinInput></FormControl>); }
  }
];
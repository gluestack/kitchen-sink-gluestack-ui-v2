import { AlertCircleIcon, ChevronDownIcon } from "@/components/ui/icon";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";

import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";

export const examples = [

    {
      name: "Select FormControlled",
      Code: <FormControl isRequired isInvalid><FormControlLabel><FormControlLabelText>Choose your favorite color</FormControlLabelText></FormControlLabel><Select><SelectTrigger><SelectInput placeholder="Select option"/><SelectIcon className="mr-3" as={ChevronDownIcon} /></SelectTrigger><SelectPortal><SelectBackdrop /><SelectContent><SelectDragIndicatorWrapper><SelectDragIndicator /></SelectDragIndicatorWrapper><SelectItem label="Red" value="red" /><SelectItem label="Blue" value="blue" /><SelectItem label="Black" value="black" /><SelectItem label="Pink" value="pink" isDisabled={true} /><SelectItem label="Green" value="green" /></SelectContent></SelectPortal></Select><FormControlHelper><FormControlHelperText>You can only select one option</FormControlHelperText></FormControlHelper><FormControlError><FormControlErrorIcon as={AlertCircleIcon} /><FormControlErrorText>Mandatory field</FormControlErrorText></FormControlError></FormControl>
    }
];
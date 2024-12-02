import { Textarea, TextareaInput } from "@/components/ui/textarea";

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";

export const examples = [

    {
      name: "FormControl",
      Code: <FormControl size="sm"><FormControlLabel><FormControlLabelText>Write with me</FormControlLabelText></FormControlLabel><Textarea><TextareaInput placeholder='Once upon a time...'/></Textarea><FormControlHelper><FormControlHelperText>Start your story</FormControlHelperText></FormControlHelper></FormControl>
    }
];
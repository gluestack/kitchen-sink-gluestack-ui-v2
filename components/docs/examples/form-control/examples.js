export const examples = [

    {
      name: "Form Control with Radio",
      Code: function App () { const [values, setValues] = React.useState("Mango"); return (<FormControl><FormControlLabel><FormControlLabelText>Favourite fruit</FormControlLabelText></FormControlLabel><RadioGroup className='my-2' value={values} onChange={setValues}><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Mango</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Apple</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Orange</RadioLabel></Radio></VStack></RadioGroup><FormControlHelper><FormControlHelperText>Choose the fruit you like the most</FormControlHelperText></FormControlHelper></FormControl>) }
    },

    {
      name: "Form Control with Checkbox",
      Code: function App() { const [values, setValues] = React.useState(['bits']); return (<FormControl><FormControlLabel><FormControlLabelText>Sign up for newsletters</FormControlLabelText></FormControlLabel><CheckboxGroup className="my-2" value={values} onChange={(keys) =>{ setValues(keys); }} ><VStack space="sm"><Checkbox size="sm" value="bits"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Daily Bits</CheckboxLabel></Checkbox><Checkbox size="sm" value="event"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Event Updates</CheckboxLabel></Checkbox><Checkbox size="sm" value="sponsorship"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Sponsorship</CheckboxLabel></Checkbox></VStack></CheckboxGroup><FormControlHelper><FormControlHelperText>Subscribe to newsletters for updates</FormControlHelperText></FormControlHelper></FormControl>); }
    },

    {
      name: "Form Control with Textarea",
      Code: <FormControl><FormControlLabel><FormControlLabelText>Comment</FormControlLabelText></FormControlLabel><Textarea><TextareaInput /></Textarea><FormControlHelper ><FormControlHelperText>Type your comment above</FormControlHelperText></FormControlHelper></FormControl>
    },

    {
      name: "Form Control with Error",
      Code: <FormControl isInvalid><FormControlLabel><FormControlLabelText>Which time slot works best for you?</FormControlLabelText></FormControlLabel><RadioGroup className='my-2'><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Monday</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Tuesday</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Wednesday</RadioLabel></Radio></VStack></RadioGroup><FormControlError><FormControlErrorIcon as={AlertCircleIcon}/><FormControlErrorText>Choose one time slot for the meeting</FormControlErrorText></FormControlError></FormControl>
    },

    {
      name: "Form Control with Form Actions",
      Code: <HStack><FormControl><Button variant='outline' action='secondary'><ButtonText>Cancel</ButtonText></Button></FormControl><FormControl><Button action='negative' className='ml-4'><ButtonText className="text-white group-hover/button:text-white group-active/button:text-white">Delete</ButtonText></Button></FormControl></HStack>
    }
];
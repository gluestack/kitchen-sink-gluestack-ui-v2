export const examples = [

    {
      name: "Multiple Radio",
      Code: function App () { const [values, setValues] = React.useState("Eng"); return (<RadioGroup value={values} onChange={setValues}><VStack space="sm"><Radio value="Eng" ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>English</RadioLabel></Radio><Radio value="Fre" ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>French</RadioLabel></Radio><Radio value="Ger" ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>German</RadioLabel></Radio></VStack></RadioGroup>) }
    },

    {
      name: "Horizontal",
      Code: function App() { const [values, setValues] = React.useState("Cash On Delivery"); return (<RadioGroup value={values} onChange={setValues} ><HStack space="2xl"><Radio value="Credit Card"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Credit Card</RadioLabel></Radio><Radio value="Cash On Delivery"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Cash On Delivery</RadioLabel></Radio></HStack></RadioGroup>) }
    },

    {
      name: "With help text",
      Code: function App () { const [values, setValues] = React.useState("Read-only"); return (<RadioGroup value={values} onChange={setValues}><VStack space="2xl"><Box><Radio value="Read-only" size="md"><RadioIndicator><RadioIcon as={CircleIcon}/></RadioIndicator><RadioLabel>Extended coverage</RadioLabel></Radio><Text size="$sm" className="ml-7 text-typography-500">Extra services included</Text></Box><Box><Radio value="Write" size="md"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Basic coverage</RadioLabel></Radio><Text size="$sm" className="ml-7 text-typography-500">Nothing extra included</Text></Box></VStack></RadioGroup>) }
    },

    {
      name: "Form Control",
      Code: <FormControl><VStack space="md"><Heading size="sm">Which time slot works best for you?</Heading><RadioGroup><VStack space="sm"><Radio value="Monday" size="md" ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Monday</RadioLabel></Radio><Radio value="Tuesday" size="md"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Tuesday</RadioLabel></Radio><Radio value="Wednesday" size="md"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Wednesday</RadioLabel></Radio></VStack></RadioGroup><Text className="text-sm text-light-500">Choose a time slot for the meeting</Text></VStack></FormControl>
    },

    {
      name: "Label left",
      Code: function App() { const [values, setValues] = React.useState("Monday"); return (<RadioGroup value={values} onChange={setValues} ><VStack space="lg" className="w-40"><Radio value="Monday" className="justify-between"><RadioLabel>Jane Cooper</RadioLabel><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio><Radio value="Tuesday" className="justify-between"><RadioLabel>Wade Warren</RadioLabel><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio></VStack></RadioGroup >) }
    },

    {
      name: "Controlled",
      Code: function App () { const [values, setValues] = React.useState('Apartments'); return (<RadioGroup value={values} onChange={setValues}><VStack space='md'><Radio value="Apartments"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Apartments</RadioLabel></Radio><Radio value="Houses"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Houses</RadioLabel></Radio></VStack></RadioGroup>) }
    },

    {
      name: "Uncontrolled",
      Code: function App () { const radioRef = React.useRef(null); const handleRadioChange = (e) =>{ e.preventDefault(); const checkboxValue = radioRef.current.checked; }; return (<RadioGroup><VStack space='md'><Radio value="Hotels" ref={radioRef} onChange={handleRadioChange} ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Hotels</RadioLabel></Radio><Radio value="Living quarters" ref={radioRef} onChange={handleRadioChange} ><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Living quarters</RadioLabel></Radio></VStack></RadioGroup>); }
    },

    {
      name: "Radio group",
      Code: function RadioGroupExample() { const [values, setValues] = React.useState("1st"); return (<RadioGroup value={values} onChange={setValues}><VStack space="sm"><Radio value="1st"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Label 1</RadioLabel></Radio><Radio value="2nd"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Label 2</RadioLabel></Radio><Radio value="3rd"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Label 3</RadioLabel></Radio></VStack></RadioGroup>); }
    }
];
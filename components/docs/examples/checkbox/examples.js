export const examples = [

    {
      name: "Multiple Checkbox",
      Code: function App(){ const [values, setValues] = React.useState(["Eng"]); return (<CheckboxGroup value={values} onChange={(keys) =>{ setValues(keys) }}><VStack space="xl"><Checkbox value="Eng"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Framer</CheckboxLabel></Checkbox><Checkbox value="invison"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Invision Studio</CheckboxLabel></Checkbox><Checkbox value="adobe"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Adobe XD</CheckboxLabel></Checkbox></VStack></CheckboxGroup>) }
    },

    {
      name: "Horizontal",
      Code: function App(){ const [values, setValues] = React.useState(["Illustration"]); return (<CheckboxGroup value={values} onChange={(keys) =>{ setValues(keys) }}><HStack space="2xl"><Checkbox value="Illustration"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Illustration</CheckboxLabel></Checkbox><Checkbox value="Animation"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Animation</CheckboxLabel></Checkbox><Checkbox value="Typography"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Typography</CheckboxLabel></Checkbox></HStack></CheckboxGroup>) }
    },

    {
      name: "With help text",
      Code: function App(){ const [values, setValues] = React.useState(["Design"]); return (<CheckboxGroup value={values} onChange={(keys) =>{ setValues(keys) }}><VStack space="2xl"><Box><Checkbox value="Design"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel >Design</CheckboxLabel></Checkbox><Text size="sm" className='ml-7'>Subscribe to updates from the Design Feed</Text></Box><Box><Checkbox value="Marketing"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Marketing</CheckboxLabel></Checkbox><Text size="sm" className='ml-7'>Subscribe to updates from the Marketing Feed</Text></Box></VStack></CheckboxGroup>) }
    },

    {
      name: "Form Control",
      Code: <FormControl><VStack space="sm"><Heading size="sm" >Sign up for newsletters</Heading><Checkbox ><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Daily Bits</CheckboxLabel></Checkbox><Checkbox ><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Event Updates</CheckboxLabel></Checkbox><Checkbox ><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Sponsorship</CheckboxLabel></Checkbox><Text size="sm">Subscribe to newsletters for updates</Text></VStack></FormControl>
    },

    {
      name: "Label left",
      Code: function App(){ const [values, setValues] = React.useState(["Jane"]); return (<CheckboxGroup value={values} onChange={(keys) =>{ setValues(keys) }}><VStack space="lg" className='w-40'><Checkbox className='justify-between' value="Jane"><CheckboxLabel >Jane Cooper</CheckboxLabel><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator></Checkbox><Checkbox value="Wade" className='justify-between'><CheckboxLabel >Wade Warren</CheckboxLabel><CheckboxIndicator><CheckboxIcon as={CheckIcon} /></CheckboxIndicator></Checkbox><Checkbox className='justify-between' value="Robert"><CheckboxLabel >Robert Fox</CheckboxLabel><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator></Checkbox></VStack></CheckboxGroup>) }
    },

    {
      name: "Controlled",
      Code: function App() { const [values, setValues] = React.useState(['UX Research']); return (<CheckboxGroup value={values} onChange={(keys)=>{ setValues(keys); }}><VStack space="md"><Checkbox value="UX Research"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>UX Research</CheckboxLabel></Checkbox><Checkbox value="Software"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Software Development</CheckboxLabel></Checkbox></VStack></CheckboxGroup>) }
    },

    {
      name: "Uncontrolled",
      Code: function App() { const radioRef = React.useRef(null); const handleCheckboxChange = (e) =>{ e.preventDefault(); const checkboxValue = radioRef.current.checked; }; return (<CheckboxGroup ref={radioRef} ><VStack space="md"><Checkbox onChange={handleCheckboxChange} value="Apartments"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Apartments</CheckboxLabel></Checkbox><Checkbox onChange={handleCheckboxChange} value="Residents"><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Residents</CheckboxLabel></Checkbox></VStack></CheckboxGroup>) }
    },

    {
      name: "Checkbox group",
      Code: function CheckboxExample(){ const [values, setValues] = React.useState([]); return (<Center><CheckboxGroup value={values} onChange={setValues} ><VStack space="sm"><Checkbox isDisabled={true} value="Label 1" ><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Label 1</CheckboxLabel></Checkbox><Checkbox value="Label 2" ><CheckboxIndicator><CheckboxIcon as={CheckIcon}/></CheckboxIndicator><CheckboxLabel>Label 2</CheckboxLabel></Checkbox></VStack></CheckboxGroup></Center>); }
    }
];
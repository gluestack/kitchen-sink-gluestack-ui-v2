import { CreditCardIcon } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";
import { ClockIcon, DownloadIcon, EditIcon, EyeOffIcon, TrashIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";

import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetIcon,
} from "@/components/ui/actionsheet";

export const examples = [

    {
      name: "Keyboard handling",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}><Actionsheet isOpen={showActionsheet} onClose={handleClose} ><ActionsheetBackdrop /><ActionsheetContent className=""><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><VStack className="w-full pt-5"><HStack space="md" className="justify-center items-center"><Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded-sm" ><Image source={{ uri: 'https://i.imgur.com/UwTLr26.png' }} resizeMode="contain" className="flex-1" /></Box><VStack className="flex-1"><Text className="font-bold">Mastercard</Text><Text>Card ending in 2345</Text></VStack></HStack><FormControl className="mt-[36px]"><FormControlLabel><FormControlLabelText>Confirm security code</FormControlLabelText></FormControlLabel><Input className="w-full"><InputSlot><InputIcon as={CreditCardIcon} className="ml-2"/></InputSlot><InputField placeholder="CVC/CVV" /></Input><Button onPress={handleClose} className="mt-3"><ButtonText className="flex-1">Pay $1000</ButtonText></Button></FormControl></VStack></ActionsheetContent></Actionsheet></KeyboardAvoidingView></>); }
    },

    {
      name: "Icons",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[36]} ><KeyboardAvoidingView behavior="position" style={{ position: 'relative', flex: 1, justifyContent: 'flex-end', }} ><ActionsheetBackdrop /><ActionsheetContent className=""><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><VStack className="w-full pt-5"><HStack space="md" className="justify-center items-center"><Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded-sm" ><Image source={{ uri: 'https://i.imgur.com/UwTLr26.png' }} resizeMode="contain" className="flex-1" /></Box><VStack className="flex-1"><Text className="font-bold">Mastercard</Text><Text>Card ending in 2345</Text></VStack></HStack><FormControl className="mt-9"><FormControlLabel><FormControlLabelText>Confirm security code</FormControlLabelText></FormControlLabel><Input className="w-full"><InputSlot><InputIcon as={CreditCardIcon} className="ml-2"/></InputSlot><InputField placeholder="CVC/CVV" /></Input><Button onPress={handleClose} className="mt-3"><ButtonText className="flex-1">Pay $1000</ButtonText></Button></FormControl></VStack></ActionsheetContent></KeyboardAvoidingView></Actionsheet></>) }
    },

    {
      name: "VirtualizedList",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><Actionsheet isOpen={showActionsheet} onClose={handleClose}><ActionsheetBackdrop /><ActionsheetContent><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><ActionsheetItem onPress={handleClose}><ActionsheetIcon className="stroke-background-700" as={EditIcon} /><ActionsheetItemText>Edit Message</ActionsheetItemText></ActionsheetItem><ActionsheetItem onPress={handleClose}><ActionsheetIcon className="stroke-background-700" as={EyeOffIcon} /><ActionsheetItemText>Mark Unread</ActionsheetItemText></ActionsheetItem><ActionsheetItem onPress={handleClose}><ActionsheetIcon className="stroke-background-700" as={ClockIcon} /><ActionsheetItemText>Remind Me</ActionsheetItemText></ActionsheetItem><ActionsheetItem onPress={handleClose}><ActionsheetIcon className="stroke-background-700" as={DownloadIcon} /><ActionsheetItemText>Add to Saved Items</ActionsheetItemText></ActionsheetItem><ActionsheetItem isDisabled onPress={handleClose}><ActionsheetIcon className="stroke-background-700" as={TrashIcon} /><ActionsheetItemText>Delete</ActionsheetItemText></ActionsheetItem></ActionsheetContent></Actionsheet></>); }
    },

    {
      name: "FlatList",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); const data = React.useMemo(() =>Array(50).fill(0).map((_, index) =>'Item' + index),[]); const getItem = (_data, index) =>({ id: index, title: _data[index], }); const getItemCount = (_data) =>_data.length; const Item = React.useCallback( ({ title }) =>(<ActionsheetItem onPress={handleClose}><ActionsheetItemText>{title}</ActionsheetItemText></ActionsheetItem>), [handleClose] ); return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[50]}><ActionsheetBackdrop /><ActionsheetContent><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><ActionsheetVirtualizedList h="$56" data={data} initialNumToRender={5} renderItem={({ item }) =><Item title={item.title} />} keyExtractor={(item) =>item.id} getItemCount={getItemCount} getItem={getItem} /></ActionsheetContent></Actionsheet></>); }
    },

    {
      name: "SectionList",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); const DATA = [ { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Item' }, { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Item' }, { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Third Item' }, ]; const Item = React.useCallback( ({ title }) =>(<ActionsheetItem onPress={handleClose}><ActionsheetItemText>{title}</ActionsheetItemText></ActionsheetItem>), [handleClose] ); return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><Actionsheet isOpen={showActionsheet} onClose={handleClose}><ActionsheetBackdrop /><ActionsheetContent><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><ActionsheetFlatList data={DATA} renderItem={({ item }) =><Item title={item.title} />} keyExtractor={(item) =>item.id} /></ActionsheetContent></Actionsheet></>); }
    },

    {
      name: "File Upload with Actionsheet",
      Code: function App(){ const [showActionsheet, setShowActionsheet] = React.useState(false); const handleClose = () =>setShowActionsheet(false); const DATA = [ { title: 'Gender', data: ['Men', 'Women', 'Boy', 'Girl'], }, ]; return (<><Button onPress={() =>setShowActionsheet(true)}><ButtonText>Open</ButtonText></Button><Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[35]}><ActionsheetBackdrop /><ActionsheetContent><ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper><ActionsheetSectionList h="$56" sections={DATA} keyExtractor={(item, index) =>item + index} renderItem={({ item }) =>(<ActionsheetItem onPress={handleClose}><ActionsheetItemText>{item}</ActionsheetItemText></ActionsheetItem>)} renderSectionHeader={({ section: { title, data } }) =>(<ActionsheetSectionHeaderText>{title} ({data.length})</ActionsheetSectionHeaderText>)} /></ActionsheetContent></Actionsheet></>); }
    }
];
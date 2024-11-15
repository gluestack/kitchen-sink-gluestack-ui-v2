// Import Statements
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon, TrashIcon } from '@/components/ui/icon';
import React from 'react';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog';
import { UploadCloud } from 'lucide-react-native';
// Examples
export const examples = [
  {
    name: "AlertDialog with image",
    Code: (
      function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Pay</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose}><AlertDialogBackdrop /><AlertDialogContent className="p-0 max-w-[590px] sm:flex-row border-primary-800 rounded-xl"><Box className="bg-primary-600 min-w-[123px] items-center justify-center py-4 sm:py-0"><Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/e102/c0d3/7d9780cf2bbdcce3142cbe98fb9c6d6e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcv50VxIIiZhgk7eFIXeeXuIB8IvftOJ6AmQNB0aDmgTXSH3Ph1vQHftectHl91sTPpuGXPWh~B0yVfarBPjq8E-m1o4XqGE4E5EMoSraKMLpWbmkbqeHrI43wt1qQPZIy91~VvJnh~j4Srb8SIpVyKUfJ7rGWfn~umxyBBH7C-04kXgt7RYswh61lswlKugYb8BmO7VYijmjcqTHvnnajNGdjCJM9GH5AaZVGjnQaJfY6whJpjbvpu7qjWQwh2NUh6OlBQz74kUVEg8OeuUcwAA5dd6HIY0plf7o3q7Cq5x35J6oUN30HY1TZ9l2b9fg14~EUkA8apLV1XM3Lad-Q__', }} alt="image" className="h-[95px] w-[95px]" /></Box><AlertDialogBody className="" contentContainerClassName="p-6 flex-row justify-between gap-6 md:gap-9 items-center" ><VStack><Heading size="md" className="text-typography-950 font-semibold leading-6">Get Additional Discount</Heading><Text className="pt-2 text-typography-950" size="sm">Upgrade your plan before your trial ends yo get 5% discount. Use code{' '}<Text className="font-bold" size="sm">#PRO005</Text></Text></VStack><Button size="sm" className="hidden sm:flex" onPress={handleClose}><ButtonText>Upgrade</ButtonText></Button></AlertDialogBody></AlertDialogContent></AlertDialog></>); }
    )
  },
  {
    name: "AlertDialog with icon + cta",
    Code: (
      function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Upload</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose} ><AlertDialogBackdrop /><AlertDialogContent className="p-4 gap-4 max-w-[649px] w-full md:flex-row mx-2"><AlertDialogBody className="" contentContainerClassName="flex-row gap-4" ><Box className="h-10 min-[350px]:h-14 w-12 min-[350px]:w-14 rounded-full bg-background-50 items-center justify-center"><Icon as={UploadCloud} className="stroke-background-900" size="xl" /></Box><VStack className="gap-1"><Heading size="md" className="text-typography-950 font-semibold">Cloud storage full!</Heading><Text size="sm">You have used up all the storage you have.</Text></VStack></AlertDialogBody><AlertDialogFooter><Button variant="outline" action="secondary" onPress={handleClose} size="sm" ><ButtonText>Cancel</ButtonText></Button><Button size="sm" onPress={handleClose}><ButtonText>Upgrade Storage</ButtonText></Button></AlertDialogFooter></AlertDialogContent></AlertDialog></>); }
    )
  },
  {
    name: "AlertDialog with Delete Option",
    Code: (
      function Example(){ const [showAlertDialog, setShowAlertDialog] = React.useState(false); const handleClose = () =>setShowAlertDialog(false); return (<><Button onPress={() =>setShowAlertDialog(true)}><ButtonText>Delete Invoice</ButtonText></Button><AlertDialog isOpen={showAlertDialog} onClose={handleClose} ><AlertDialogBackdrop /><AlertDialogContent className="w-full max-w-[415px] gap-4 items-center"><Box className="rounded-full h-[52px] w-[52px] bg-background-error items-center justify-center"><Icon as={TrashIcon} size="lg" className="stroke-error-500" /></Box><VStack className="items-center"><AlertDialogHeader className="mb-2"><Heading size="md">Delete account?</Heading></AlertDialogHeader><AlertDialogBody><Text size="sm" className="text-center">The invoice will be deleted from the invoices section and in the documents folder. This cannot be undone.</Text></AlertDialogBody><AlertDialogFooter className="mt-5"><Button size="sm" action="negative" onPress={handleClose} className="px-[30px]"><ButtonText>Delete</ButtonText></Button><Button variant="outline" action="secondary" onPress={handleClose} size="sm" className="px-[30px]" ><ButtonText>Cancel</ButtonText></Button></AlertDialogFooter></VStack></AlertDialogContent></AlertDialog></>); }
    )
  },
]
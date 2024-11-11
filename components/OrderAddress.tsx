import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "native-base";
import { EvilIcons } from "@native-base/icons";
import FloatingLabelInput from "./FloatingInput";
import Bill from "./Bill";

const LINE_ITEMS = [
  {
    itemNumber: 0,
    modalVisible: false,
    text: "Sub Total",
    Amount: "₹1199",
  },
  {
    itemNumber: 1,
    modalVisible: false,
    text: "Shipping Charge",
    Amount: "Free",
  },
  {
    itemNumber: 2,
    modalVisible: false,
    text: "Discount",
    Amount: "- ₹0",
  },
  {
    itemNumber: 2,
    modalVisible: false,
    text: "Use Reward Points (2000)",
    Amount: "APPLY",
  },
];

export default function Address(props: any) {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Box bg="coolGray.100" px="5">
      <Stack
        space="8"
        my="10"
        justifyContent="center"
        direction={{ lg: "row" }}
      >
        <Box
          p="4"
          shadow="2"
          maxHeight="12"
          borderRightWidth="2"
          width={{ lg: "20%" }}
          bg="white"
          justifyContent="center"
          borderRightColor="slatePink.400"
        >
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="semibold" color="slatePink.500">
              New Address
            </Text>
          </HStack>
        </Box>
        <Box
          bg="white"
          shadow="4"
          w={{ lg: "30%" }}
          height={{ lg: "100%" }}
          px={4}
          mt={{ base: 4, lg: 0 }}
        >
          <Text
            fontSize="md"
            fontWeight="semibold"
            pt={{ md: 4, lg: 4, base: 4 }}
          >
            New Address
          </Text>
          <VStack space="5" mt={5}>
            <Divider />

            <FloatingLabelInput
              py="3"
              isRequired
              label="Select Country"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={country}
              onChangeText={(txt: any) => setCountry(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Name"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={name}
              onChangeText={(txt: any) => setName(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Email"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={email}
              onChangeText={(txt: any) => setEmail(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="PhoneNumber"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={phoneNo}
              onChangeText={(txt: any) => setPhoneNo(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="PostalCode"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={postalCode}
              onChangeText={(txt: any) => setPostalCode(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <FloatingLabelInput
              py="3"
              isRequired
              label="Address"
              labelColor="coolGray.400"
              labelBGColor="white"
              defaultValue={address}
              onChangeText={(txt: any) => setAddress(txt)}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
            <Button
              mt={4}
              mb={10}
              colorScheme="pink"
              bg="slatePink.300"
              rightIcon={
                <Icon
                  as={EvilIcons}
                  name="chevron-right"
                  color="white"
                  size="6"
                />
              }
              _text={{
                color: "white",
                fontSize: "sm",
                fontWeight: "semibold",
              }}
            >
              SHIP TO THIS ADDRESS
            </Button>
          </VStack>
        </Box>
        <Box w={{ lg: "26%" }}>
          <Bill />
        </Box>
      </Stack>
    </Box>
  );
}

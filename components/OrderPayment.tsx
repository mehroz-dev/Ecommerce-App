import React from "react";
import {
  Box,
  Button,
  Divider,
  Hidden,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Stack,
  Pressable,
} from "native-base";
import { MaterialIcons, Octicons } from "@native-base/icons";
import Bill from "./Bill";

const PAYMENT_VENDORS = [
  "UPI",
  "Gift Card",
  "GooglePay",
  "Net Banking",
  "Mobile Wallets",
  "Cash on Delivery",
  "Credit/Debit Card",
];

export default function Payment(props: any) {
  return (
    <Box bg="coolGray.100" px="5">
      <Stack
        space={8}
        my={10}
        justifyContent="center"
        direction={{ lg: "row" }}
      >
        <Box w={{ lg: "20%" }} overflow="hidden">
          <VStack
            bg="white"
            // borderWidth="1"
            borderColor="coolGray.300"
            divider={<Divider pl="2" />}
            shadow="2"
          >
            {PAYMENT_VENDORS.map((item, index) => {
              return (
                <Pressable key={index} _hover={{ bg: "blueGray.100" }} pl="2">
                  <Text
                    px="2"
                    py="3"
                    fontSize="md"
                    color={
                      item == "Credit/Debit Card"
                        ? "slatePink.400"
                        : "coolGray.800"
                    }
                    fontWeight={
                      item == "Credit/Debit Card" ? "semibold" : "normal"
                    }
                    borderRightWidth={item == "Credit/Debit Card" ? 2 : 0}
                    borderRightColor="slatePink.400"
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </VStack>
        </Box>

        <Box w={{ lg: "30%" }}>
          <Box
            px="4"
            mb={{ base: "4", lg: "0" }}
            bg="white"
            // borderWidth="1"
            borderColor="coolGray.300"
            borderRadius={2}
            shadow="2"
          >
            <Text
              my="3"
              color="coolGray.800"
              fontSize="md"
              fontWeight="semibold"
            >
              Credit/Debit Card
            </Text>
            <Divider bg="coolGray.300" />
            <Input
              mt="8"
              fontSize="sm"
              fontWeight="semibold"
              placeholder="Card Number"
              variant="underlined"
              _focus={{
                borderBottomColor: "slatePink.400",
              }}
              _hover={{
                borderBottomColor: "slatePink.400",
              }}
              keyboardType="numeric"
              maxLength={16}
              _web={{ type: "number" }}
            />
            <Text
              mt="10"
              ml="2"
              color="coolGray.400"
              fontSize="sm"
              fontWeight="semibold"
            >
              Expiry
            </Text>
            <HStack mt="2" space="4" alignItems="center">
              <VStack w="30%">
                <HStack alignItems="center">
                  <Input
                    placeholder="MM"
                    fontSize="sm"
                    fontWeight="semibold"
                    w="40%"
                    variant="unstyled"
                  />
                  <Text>/</Text>
                  <Input
                    placeholder="YY"
                    fontWeight="semibold"
                    fontSize="sm"
                    w="40%"
                    variant="unstyled"
                  />
                </HStack>
                <Divider bg="coolGray.200" />
              </VStack>
              <VStack w="15%">
                <Input
                  placeholder="CVV"
                  fontWeight="semibold"
                  fontSize="sm"
                  variant="unstyled"
                />
                <Divider width="100%" bg="coolGray.200" />
              </VStack>
              <HStack space="3" alignItems="center">
                <Icon
                  size="10"
                  as={Octicons}
                  name="credit-card"
                  color="coolGray.500"
                />
                <Hidden till="xl">
                  <Text w="50%" color="coolGray.500" fontSize="sm">
                    Last 3 Digits at the back of the Card
                  </Text>
                </Hidden>
              </HStack>
            </HStack>
            <Hidden from="xl">
              <Text w="50%" my="2" color="coolGray.500" fontSize="sm">
                Last 3 Digits at the back of the Card
              </Text>
            </Hidden>
            <Button
              py="3"
              mb="4"
              mt="8"
              bg="slatePink.400"
              colorScheme="pink"
              borderRadius={4}
              _text={{
                fontSize: "sm",
                fontWeight: "semibold",
                color: "coolGray.50",
              }}
              rightIcon={
                <Icon
                  ml="2"
                  as={MaterialIcons}
                  name="keyboard-arrow-right"
                  size="5"
                  color="coolGray.50"
                />
              }
            >
              PAY ₹1199 NOW
            </Button>
          </Box>
        </Box>
        <Box w={{ lg: "26%" }}>
          <VStack
            bg="white"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow={3}
          >
            <Bill isPayment />
            <VStack
              py="2"
              px="4"
              bg="#F3F3F3"
              space="2"
              borderColor="coolGray.300"
            >
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  _dark={{
                    color: "coolGray.50",
                    bg: { base: "coolGray.800", md: "coolGray.900" },
                  }}
                  _light={{
                    color: "coolGray.800",
                  }}
                >
                  SHIPPING ADDRESS
                </Text>
                <Pressable>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    _dark={{
                      color: "coolGray.50",
                      bg: { base: "coolGray.800", md: "coolGray.900" },
                    }}
                    _light={{
                      color: "slatePink.400",
                    }}
                  >
                    CHANGE
                  </Text>
                </Pressable>
              </HStack>
              <VStack>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "coolGray.50",
                    bg: { base: "coolGray.800", md: "coolGray.900" },
                  }}
                  _light={{
                    color: "coolGray.800",
                  }}
                >
                  John Doe
                </Text>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "coolGray.50",
                    bg: { base: "coolGray.800", md: "coolGray.900" },
                  }}
                  _light={{
                    color: "coolGray.800",
                  }}
                >
                  XYZ, Street 12, 96 Avenue
                </Text>
              </VStack>
              <Text
                _dark={{
                  color: "coolGray.50",
                  bg: { base: "coolGray.800", md: "coolGray.900" },
                }}
                _light={{
                  color: "coolGray.800",
                }}
                fontSize="xs"
                fontWeight="semibold"
              >
                +XX-666XXXXXXX
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

import React from "react";
import {
  Box,
  HStack,
  VStack,
  Pressable,
  Text,
  Image,
  ScrollView,
  Stack,
} from "native-base";
import OrderInit from "../components/OrderInit";
import OrderAddress from "../components/OrderAddress";
import OrderPayment from "../components/OrderPayment";

export default function OrderCheckoutFlow(props: any) {
  const [tabName, setTabName] = React.useState("Login");
  return (
    <ScrollView h="100vh" bg="coolGray.100">
      <Box flex="1" bg="coolGray.100" borderColor="coolGray.200" h="100%">
        <Stack
          pt={{ base: 4 }}
          alignItems={{ lg: "center" }}
          pl={{ base: 5 }}
          space={{ base: "20", md: "40" }}
          bg="white"
          borderColor="coolGray.200"
          direction={{ md: "row" }}
        >
          <Box w={{ lg: "25%" }}>
            <Image
              size="md"
              alt="logo"
              alignSelf={{ lg: "center" }}
              resizeMode="contain"
              source={{ uri: "/logo.png" }}
            />
          </Box>
          <HStack
            pt={2}
            flexWrap="wrap"
            justifyContent="space-between"
            px={{ base: 0, lg: 10 }}
            w={{ base: "60%", md: "60%", lg: "40%" }}
          >
            <Pressable
              p="2"
              pb="4"
              pr="8"
              onPress={() => {
                setTabName("Login");
              }}
              borderBottomWidth="3px"
              borderBottomColor={
                tabName == "Login" ? "slatePink.300" : "coolGray.50"
              }
            >
              <VStack>
                <Text
                  fontWeight="medium"
                  color={tabName == "Login" ? "slatePink.300" : "coolGray.900"}
                >
                  1 - Login
                </Text>
                <Text
                  fontSize="sm"
                  color={tabName == "Address" ? "coolGray.500" : "coolGray.400"}
                >
                  xyz@example.com
                </Text>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              pr="4"
              pb="4"
              onPress={() => {
                setTabName("Address");
              }}
              borderBottomWidth="3px"
              borderBottomColor={
                tabName == "Address" ? "slatePink.300" : "coolGray.50"
              }
            >
              <VStack>
                <Text
                  fontWeight="medium"
                  color={
                    tabName == "Address" ? "slatePink.300" : "coolGray.900"
                  }
                >
                  2 - Address
                </Text>
                <Text
                  fontSize="sm"
                  color={tabName == "Address" ? "coolGray.500" : "coolGray.400"}
                >
                  XYZ, Street 12, 96 Avenue
                </Text>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              pb="4"
              pr="4"
              onPress={() => {
                setTabName("Payment");
              }}
              borderBottomWidth="3px"
              borderBottomColor={
                tabName == "Payment" ? "slatePink.300" : "coolGray.50"
              }
            >
              <Text
                fontWeight="medium"
                color={tabName == "Payment" ? "slatePink.300" : "coolGray.900"}
              >
                3 - Payment
              </Text>
            </Pressable>
          </HStack>
        </Stack>
        <Box flex="1" bg="red.100">
          {tabName == "Login" ? <OrderInit /> : null}
          {tabName == "Address" ? <OrderAddress /> : null}
          {tabName == "Payment" ? <OrderPayment /> : null}
        </Box>
      </Box>
    </ScrollView>
  );
}

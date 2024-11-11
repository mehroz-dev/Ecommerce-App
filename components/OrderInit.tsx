import React, { useState } from "react";
import { AntDesign, Feather } from "@native-base/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  Heading,
  Stack,
} from "native-base";
import FloatingLabelInput from "./FloatingInput";
import Bill from "./Bill";

export default function Checkout() {
  const [text, setText] = useState("");

  return (
    <Box bg="coolGray.100" px="5">
      <Stack
        space={8}
        my={10}
        justifyContent="center"
        direction={{ lg: "row" }}
      >
        <Box
          p="4"
          shadow="2"
          maxHeight={12}
          borderRightWidth={2}
          width={{ lg: "20%" }}
          bg="white"
          justifyContent="center"
          borderRightColor="slatePink.400"
        >
          <Text fontSize="md" fontWeight="semibold" color="slatePink.500">
            Login/Register
          </Text>
        </Box>
        <VStack px={5} shadow="2" bg="white" width={{ lg: "30%" }}>
          <Text
            color="textColors.100"
            fontWeight="semibold"
            fontSize="md"
            py="4"
          >
            Login or Register
          </Text>
          <Divider mb="5"></Divider>
          <HStack space={2}>
            <Icon size="6" as={Feather} name="check" color="green.500" />
            <Text color="textColors.100" fontSize="sm" fontWeight="normal">
              Get Reward Points on new registration
            </Text>
          </HStack>
          <HStack pt={1} space={2}>
            <Icon size="6" as={Feather} name="check" color="green.500" />
            <Text color="textColors.100" fontSize="sm">
              Get More Reward Points When You Share Code
            </Text>
          </HStack>

          <Heading
            fontSize="md"
            fontWeight="medium"
            color="grayShade.100"
            mt="4"
          >
            Continue with Social login
          </Heading>

          <HStack my="2" pb="3" space="2">
            <Button
              size="lg"
              bg="white"
              variant="unstyled"
              leftIcon={
                <Icon
                  as={AntDesign}
                  name="facebook-square"
                  size="6"
                  color="info.600"
                />
              }
              borderColor="coolGray.200"
              borderWidth={1}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _hover={{
                _text: {
                  color: "light.500",
                },
              }}
            >
              FACEBOOK
            </Button>

            <Button
              size="lg"
              bg="white"
              variant="unstyled"
              borderColor="coolGray.200"
              borderWidth={1}
              leftIcon={<Icon as={AntDesign} name="google" size="6" />}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _hover={{
                _text: {
                  color: "light.500",
                },
              }}
            >
              GOOGLE
            </Button>
          </HStack>

          <FloatingLabelInput
            py="3"
            isRequired
            label="Enter Email-Id Or Phone Number"
            labelBGColor={useColorModeValue("#fff", "#1f2937")}
            // borderRadius="sm"
            defaultValue={text}
            onChangeText={(txt: any) => setText(txt)}
            _text={{
              fontSize: "lg",
              fontWeight: "medium",
            }}
            borderColor="coolGray.300"
          />
          <Button
            size="lg"
            bg="slatePink.400"
            colorScheme="pink"
            endIcon={
              <Icon as={AntDesign} name="right" size="3" color="white" />
            }
            mt={4}
            mb={8}
            _text={{
              color: "white",
              fontSize: "sm",
              fontWeight: "medium",
              letterSpacing: 0.8,
            }}
          >
            NEXT
          </Button>
          <Text fontSize="sm" fontWeight="bold" pb={3}>
            Checkout as guest
          </Text>
          <Divider></Divider>
          <Text fontSize="xs" my={4} fontWeight="medium">
            I do not want any more benefits from Nayak
          </Text>
          <Button
            size="lg"
            bg="white"
            variant="outline"
            colorScheme="pink"
            py="3"
            endIcon={
              <Icon
                as={AntDesign}
                name="right"
                size="xs"
                color="slatePink.400"
              />
            }
            mt={4}
            mb={8}
            _text={{
              fontSize: "sm",
              color: "slatePink.400",
              fontWeight: "semibold",
              letterSpacing: 0.8,
            }}
          >
            CONTINUE AS GUEST
          </Button>
        </VStack>
        <Box w={{ lg: "26%" }}>
          <Bill />
        </Box>
      </Stack>
    </Box>
  );
}

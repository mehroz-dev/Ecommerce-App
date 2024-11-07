import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Pressable,
  Icon,
  Image,
  VStack,
  Divider,
} from "native-base";
import { EvilIcons } from "@native-base/icons";

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

function Bill(props: any) {
  const [showDetails, setShowDetails] = useState(
    props.isPayment ? false : true
  );
  const [expandTotal, setExpandToatal] = useState(true);
  return (
    <Box bg="white" shadow={3} mt={{ md: 4, lg: 0, base: 4 }}>
      <HStack alignItems="center" justifyContent="space-between" p={4}>
        <Text color="yellowShade.300" fontSize="sm" fontWeight="medium">
          1 Items in your Bag
        </Text>
        <Pressable
          onPress={() => {
            setShowDetails(!showDetails);
          }}
          alignItems="center"
          flexDir="row"
        >
          <Text color="slatePink.300" fontSize="sm" fontWeight="medium">
            {showDetails ? "Edit" : "Details"}
          </Text>
          <Icon
            as={EvilIcons}
            color="slatePink.300"
            size="8"
            name={showDetails ? "chevron-up" : "chevron-down"}
          />
        </Pressable>
      </HStack>
      {showDetails ? (
        <Box bg="coolGray.100" w="100%">
          <HStack bg="white" space={1} mx={2} my={3} p={2}>
            <Image
              source={{
                uri: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/_/6_255.jpg",
              }}
              alt="Alternate Text"
              height={20}
              width={{ lg: "20%", md: "18%", base: "15%" }}
            />
            <VStack space={1} w={{ lg: "80%", md: "82%", base: "85%" }}>
              <Text>Nayak SKINRX AM/PM Duo for Acne Free Skin</Text>
              <Text mb="1">2pcs</Text>
              <Divider />
              <HStack alignItems="center" justifyContent="space-between">
                <Text>Qty:1</Text>
                <HStack alignItems="center" space={1}>
                  <Text fontSize="2xs" strikeThrough>
                    ₹1598
                  </Text>
                  <Text fontSize="md">₹1199</Text>
                </HStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      ) : null}
      {expandTotal ? (
        <VStack px={4} space={3} mt={2}>
          {LINE_ITEMS.map((item, index) => {
            return (
              <HStack
                key={index}
                alignItems="center"
                justifyContent="space-between"
              >
                {item.text == "Discount" ? (
                  <Text
                    color="textColors.200"
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {item.text}
                  </Text>
                ) : (
                  <Text fontSize="sm" fontWeight="medium" color="coolGray.800">
                    {item.text}
                  </Text>
                )}

                {item.Amount == "Free" || item.Amount == "- ₹0" ? (
                  <Text
                    color="textColors.200"
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {item.Amount}
                  </Text>
                ) : item.Amount == "APPLY" ? (
                  <Pressable>
                    {({ isHovered, isFocused, isPressed }) => {
                      return (
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color={
                            isHovered
                              ? "pink.400"
                              : isPressed
                              ? "red.700"
                              : "slatePink.500"
                          }
                        >
                          {item.Amount}
                        </Text>
                      );
                    }}
                  </Pressable>
                ) : (
                  <Text fontSize="sm" fontWeight="medium" color="coolGray.800">
                    {item.Amount}
                  </Text>
                )}
              </HStack>
            );
          })}
          <Divider />
        </VStack>
      ) : null}

      <HStack alignItems="center" justifyContent="space-between" px={4} mt={2}>
        <Text color="coolGray.800" fontWeight="medium" fontSize="md">
          Grand Total
        </Text>
        <Pressable
          onPress={() => {
            setExpandToatal(!expandTotal);
          }}
        >
          <HStack alignItems="center">
            <Text color="coolGray.800" fontWeight="medium" fontSize="md">
              ₹1199
            </Text>
            <Icon
              as={EvilIcons}
              name={expandTotal ? "chevron-up" : "chevron-down"}
              color="slatePink.300"
              size="8"
            />
          </HStack>
        </Pressable>
      </HStack>
      <Divider mt={1} />
    </Box>
  );
}

export default Bill;

import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addRawData } from "../Store/CounterSlice";
import LoadJsonData from "./LoadJsonData";
const TextComponent = () => {
  const [textValue, setTextValue] = useState();
  // const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      try {
        JSON.parse(textValue);
        dispatch(addRawData(textValue));
      } catch (error) {
        console.log(error);
        dispatch(addRawData([]));
      }
      // dispatch(addRawData(textValue));
    }
  });
  console.log(textValue);

  // const handleConvert = () => {
  // try {
  //   JSON.parse(textValue);
  //   console.log("converted");
  //   dispatch(addRawData(textValue));
  // } catch (error) {
  //   console.log(error);
  //   dispatch(addRawData([]));
  // }
  // isError == false && dispatch(addRawData(textValue));
  // };

  // useState(() => {
  // isError == true && alert("Invalid JSON");
  // }, [isError]);

  // callback function to store url data
  const handleUrlData = (data) => {
    setTextValue(JSON.stringify(data));
  };

  // useEffect(() => {
  //   handleErrorShow();
  // }, [textValue]);

  // Handle format the data
  const handleFormat = () => {
    setTextValue(JSON.stringify(JSON.parse(textValue), null, 4));
  };

  return (
    <Box bg={"#f9f9f9"}>
      <Box p={2}>
        <Box
          width={"100%"}
          height={"40px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          fontSize={"13px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            height={"100%"}
            gap={5}
          >
            <Text
              cursor={"pointer"}
              p={"5px"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              Paste
            </Text>
            <Text
              cursor={"pointer"}
              p={"5px"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              Copy
            </Text>
            <Box>{" | "}</Box>
            <Text
              cursor={"pointer"}
              p={"5px"}
              onClick={handleFormat}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              Format
            </Text>
            <Text
              cursor={"pointer"}
              p={"5px"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              Remove white space
            </Text>
            <Box>{" | "}</Box>
            <Text
              cursor={"pointer"}
              onClick={() => {
                setTextValue("");
              }}
              p={"5px"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              Clear
            </Text>
            <Box>{" | "}</Box>
            {/* Here a modal to show JSON Data */}
            <LoadJsonData handleUrlData={handleUrlData} />
          </Box>
          <Box>
            <Text
              cursor={"pointer"}
              p={"5px"}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              About
            </Text>
          </Box>
        </Box>
      </Box>
      {/* {showModal && <LoadJsonData showModal={showModal} />} */}
      <Textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        height={"300px"}
        placeholder="Paste the JSON code here"
      ></Textarea>
      {/* <Button onClick={handleConvert}>Convert Data</Button> */}
    </Box>
  );
};

export default TextComponent;

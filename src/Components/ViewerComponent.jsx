import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDataArray, MdDataObject } from "react-icons/md";
import { BsSquareFill } from "react-icons/bs";
import HandleToggleShow from "./handleToggleShow";

const ViewerComponent = () => {
  const { data } = useSelector((state) => state.data);

  //   checking that data is type of array or not
  let out = Array.isArray(data) ? [data] : data;

  const showParsedData = (data) => {
    // checking datatype Array or Objects
    return data.map(([key, value], i) => {
      const checkType = Array.isArray(value) ? (
        <MdDataArray fontSize={"25px"} />
      ) : typeof value === "object" ? (
        <MdDataObject fontSize={"25px"} />
      ) : (
        ""
      );

      return (
        <Box key={key} margin={"5px 0px"} bg={"gray.100"}>
          <Box display={"flex"}>
            {
              <BsSquareFill
                style={{ marginTop: "7px", marginRight: "5px" }}
                fontSize={"10px"}
                color="blue"
              />
            }
            {checkType}
            {key}:{" "}
            {/* main part where showparsedata is recursively called based on input */}
            {Array.isArray(value) ? (
              <HandleToggleShow>
                {value.map((el, i) =>
                  typeof el === "object"
                    ? showParsedData([["", el]])
                    : showParsedData([[i, el]])
                )}
              </HandleToggleShow>
            ) : typeof value === "object" ? (
              <HandleToggleShow>
                {showParsedData(Object.entries(value))}
              </HandleToggleShow>
            ) : (
              JSON.stringify(value)
            )}
          </Box>
        </Box>
      );
    });
  };
  return (
    <Box>
      {data ? (
        showParsedData(Object.entries(out))
      ) : (
        <Box
          display={"flex"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading>Invalid or no JSON data found!!</Heading>
        </Box>
      )}
    </Box>
  );
};

export default ViewerComponent;

import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { MdDataArray, MdDataObject } from "react-icons/md";
import { BsSquareFill } from "react-icons/bs";
import HandleToggleShow from "./handleToggleShow";

const ViewerComponent = () => {
  const { data, rawData } = useSelector((state) => state.data);

  //   checking that data is type of array or not
  // console.log(rawData);
  let temp = rawData?.length && JSON.parse(rawData);
  let out = rawData?.length
    ? Array.isArray(temp)
      ? [temp]
      : temp
    : Array.isArray(data)
    ? [data]
    : data;

  // console.log(out);
  // var out = null;
  // if (rawData?.length) {
  //   out = Array.isArray(temp) ? [temp] : temp;
  // }
  // if (data?.length) {
  //   let temp1 = JSON.parse(data);
  //   out = Array.isArray(temp1) ? [temp1] : temp1;
  // }

  const showParsedData = (data) => {
    // checking datatype Array or Objects
    return data.map(([key, value], i) => {
      console.log(key, value);
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
                    : // showParsedData(Object.entries([el]))
                      showParsedData([[i, el]])
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
      {rawData?.length ? (
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

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
const HandleToggleShow = ({ children }) => {
  const [show, setShow] = useState(false);
  if (show == false) {
    return (
      <HiPlus
        style={{ marginTop: "5px", marginRight: "5px" }}
        onClick={() => setShow(!show)}
      />
    );
  }
  if (show == true) {
    return (
      <>
        <HiMinus
          style={{ marginTop: "5px", marginRight: "5px" }}
          onClick={() => setShow(!show)}
        />
        <Box>{children}</Box>
      </>
    );
  }
};

export default HandleToggleShow;

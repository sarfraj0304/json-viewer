import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import ViewerComponent from "./ViewerComponent";
import TextComponent from "./TextComponent";
const JsonViewer = () => {
  return (
    <Box>
      <Tabs defaultIndex={1} variant="enclosed" bg={"#eaeaea"}>
        <TabList height={"30px"}>
          <Tab
            fontSize={"12px"}
            mr={2}
            _selected={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#f9f9f9",
              borderRadius: "20px 20px 0px 0px",
              border: "1px solid #F0E9E9",
              borderBottom: "none",
            }}
          >
            Viewer
          </Tab>
          <Tab
            fontSize={"12px"}
            _selected={{
              color: "black",
              fontWeight: "bold",
              borderRadius: "20px 20px 0px 0px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #F0E9E9",
              borderBottom: "none",
            }}
          >
            Text
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <ViewerComponent />
          </TabPanel>
          <TabPanel p={0}>
            <TextComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default JsonViewer;

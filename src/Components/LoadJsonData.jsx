import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addData } from "../Store/CounterSlice";

const LoadJsonData = ({ handleUrlData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textValue, setTextValue] = useState("");

  //   store data to redux store
  const handleSubmit = () => {
    console.log(textValue);
    axios
      .get(textValue)
      .then((res) => {
        dispatch(addData(res.data));
        handleUrlData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const dispatch = useDispatch();
  return (
    <>
      <Button
        bg={"none"}
        fontSize={"sm"}
        fontWeight={"400"}
        _hover={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
        onClick={onOpen}
      >
        Load JSON Data
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Online JSON Viewer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftAddon children="URL: " />
              <Input
                type="text"
                onChange={(e) => setTextValue(e.target.value)}
              ></Input>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoadJsonData;

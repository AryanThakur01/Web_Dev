import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../context/ContextProvider";
import axios from "axios";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let temp = user.data ? user.data : user;
  const [emailToDel, setEmailToDel] = useState("");
  const [ConfirmationBlock, setConfirmationBlock] = useState(false);

  const chState = ChatState();

  const deleteMyAccount = () => {
    const headers = {
      Authorization: `Bearer ${chState.user.data.token}`,
    };
    if (emailToDel === chState.user.data.email) {
      axios({
        url: "http://localhost:5000/api/user/remove",
        method: "delete",
        headers: headers,
        data: {
          userId: chState.user.data._id,
        },
      });
      // axios.delete(`http://localhost:5000/api/user/remove`, config, {
      //   data: { this: "This will be sent" },
      // });
      console.log(chState.user.data._id);
    }
  };

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          backgroundColor="whiteAlpha.200"
          _hover={{ bgColor: "whiteAlpha.400" }}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="whiteAlpha.200"
          color="white"
          backdropFilter="blur(20px)"
        >
          <ModalHeader textAlign="center">{temp.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" flexDirection="column">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={temp.pic}
              alt={temp.name}
              cursor="pointer"
            />
            <Text>Email: {temp.email}</Text>

            <Box display={ConfirmationBlock ? "flex" : "none"}>
              <Input
                placeholder="ENTER YOUR EMAIL TO CONFIRM"
                value={emailToDel}
                onChange={(e) => setEmailToDel(e.target.value)}
              />
              <Button ml={2} colorScheme="blackAlpha" onClick={deleteMyAccount}>
                Confirm
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                setConfirmationBlock(false);
                onClose();
              }}
            >
              Close
            </Button>
            {chState.user.data._id === temp._id ? (
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => {
                  setConfirmationBlock(true);
                }}
              >
                Delete Account
              </Button>
            ) : (
              <></>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;

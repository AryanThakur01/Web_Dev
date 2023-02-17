import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import { ChatState } from "../context/ContextProvider";
import { AddIcon } from "@chakra-ui/icons";
import { getSender } from "./config/ChatLogics";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState([]);
  const { user, setUser, selectedChat, setSelectedChat, chats, setChats } =
    ChatState();
  const toast = useToast();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.data.token}`,
        },
      };

      const { data } = await axios.get(
        "http://localhost:5000/api/chat",
        config
      );
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: "Failed to load the chat",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <>
      <Box
        color="white"
        display={{ base: !selectedChat ? "flex" : "none", md: "flex" }}
        flexDir="column"
        alignItems="center"
        p={3}
        bg="whiteAlpha.300"
        backdropFilter="blur(2px)"
        width={{ base: "100%", md: "33%" }}
        borderRadius="10px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          backdropFilter="blur(2px)"
          width="100%"
          style={{ borderBottom: "1px solid #ffffff36" }}
        >
          My Chats
          <GroupChatModal>
            <Button
              colorScheme="whiteAlpha"
              _hover={{ bgColor: "whiteAlpha.300" }}
              d="flex"
              alignItems="center"
              fontSize={{ base: "17px", md: "10px", lg: "17px" }}
              rightIcon={<AddIcon />}
            >
              New Group Chat
            </Button>
          </GroupChatModal>
        </Box>

        <Box
          d="flex"
          flexDir="column"
          p={3}
          m={2}
          // backgroundColor="whiteAlpha.400"
          width="100%"
          borderRadius="10px"
          overflowY="scroll"
        >
          {chats ? (
            <Stack>
              {chats.map((chat) => (
                <Box
                  onClick={() => setSelectedChat(chat)}
                  borderBottom="1px solid transparent"
                  _hover={{ borderBottom: "1px solid green" }}
                  cursor="pointer"
                  backgroundColor={
                    selectedChat === chat ? "blackAlpha.500" : "whiteAlpha.400"
                  }
                  display="flex"
                  p={2}
                  borderRadius="lg"
                  key={chat._id}
                >
                  <Text>
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                </Box>
              ))}
            </Stack>
          ) : (
            <ChatLoading />
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyChats;

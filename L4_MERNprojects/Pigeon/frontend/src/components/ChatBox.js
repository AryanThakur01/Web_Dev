import React from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ContextProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="whiteAlpha.300"
      backdropFilter="blur(4px)"
      width={{ base: "100%", md: "66%" }}
      borderRadius="10px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;

import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      backgroundColor="whiteAlpha.300"
      _hover={{ backgroundColor: "whiteAlpha.200" }}
      cursor="pointer"
      display="flex"
      alignItems="center"
      padding="5px"
      borderRadius="6px"
    >
      <Avatar
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
        marginInline="4px"
      />
      <Box>
        <Text><b>{user.name}</b></Text>
        <Text fontSize="xs">
          <b>Email: </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;

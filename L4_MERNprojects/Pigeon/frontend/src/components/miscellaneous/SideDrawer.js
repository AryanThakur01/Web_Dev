import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../context/ContextProvider";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import { getSender } from "../config/ChatLogics";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const LogoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in the search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.data ? user.data.token : user.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        config
      );

      setSearchResult(data);

      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Some error getting the data please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.data ? user.data.token : user.token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/chat",
        { userId },
        config
      );

      if (!chats.find((c) => c._id === data._id)) {
        setChats([data, ...chats]);
        // console.log(chats);
      }

      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chats",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        color="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="whiteAlpha.500"
        w="100%"
        p="5px 10px"
        borderWidth="1px"
        borderColor="whiteAlpha.400"
        backdropFilter="blur(2px)"
        boxShadow="0px 0px 30px black"
        position="relative"
        zIndex={111}
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" colorScheme="whiteAlpha" onClick={onOpen}>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <Text display={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2x1" fontFamily="Work sans">
          Pigeon
        </Text>
        <Box>
          <Menu>
            <MenuButton p={1}>
              <BellIcon />
              <Badge
                borderRadius="50%"
                marginLeft="-12px"
                marginTop="-10px"
                bgColor="lightgreen"
              >
                {notification.length ? notification.length : ""}
              </Badge>
            </MenuButton>
            <MenuList
              backgroundColor="whiteAlpha.200"
              paddingInline="10px"
              backdropFilter="blur(10px)"
            >
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  backgroundColor="whiteAlpha.300"
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {/* {console.log(notification)} */}
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              bgColor="whiteAlpha.500"
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.data.name}
                src={user.data.pic}
              />
            </MenuButton>
            <MenuList
              backgroundColor="whiteAlpha.200"
              paddingInline="10px"
              backdropFilter="blur(10px)"
            >
              <ProfileModal user={user}>
                <MenuItem
                  backgroundColor="whiteAlpha.200"
                  _hover={{ bgColor: "whiteAlpha.400" }}
                >
                  My Profile
                </MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem
                backgroundColor="whiteAlpha.200"
                _hover={{ bgColor: "whiteAlpha.400" }}
                onClick={LogoutHandler}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box position="unset" zIndex={999}>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            color="white"
            backdropFilter="blur(10px)"
            bgColor="whiteAlpha.300"
            boxShadow="0px 1px 2px white"
          >
            <DrawerHeader>Search Users</DrawerHeader>
            <DrawerBody>
              <Box display="flex" pb={2}>
                <Input
                  border="none"
                  borderBottom="1px solid lightBlue"
                  mr={2}
                  placeholder="Search By Name Or Email"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button
                  backgroundColor="whiteAlpha.300"
                  _hover={{ backgroundColor: "whiteAlpha.200" }}
                  onClick={handleSearch}
                >
                  Go
                </Button>
              </Box>
              {loading ? (
                <ChatLoading />
              ) : (
                searchResult?.map((user) => (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => {
                      accessChat(user._id);
                    }}
                  />
                ))
              )}
              {loadingChat && <Spinner ml="auto" display="flex" />}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default SideDrawer;

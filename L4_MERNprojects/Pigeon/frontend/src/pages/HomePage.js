import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Tabs,
} from "@chakra-ui/react";
import "./stylings/HomePage.css";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="x1" centerContent>
      <Box>
        <Text
          className="glass-container add-radius"
          d="flex"
          justifyContent="center"
          padding="10px"
          marginBlock="20px"
          width="clamp(200px, 500px, 100vw)"
          fontFamily="work sans"
          fontSize="3xl"
          textAlign="center"
        >
          Pigeon
        </Text>
        <Box
          className="glass-container add-radius"
          padding="10px"
          marginBlock="20px"
          width="clamp(200px, 500px, 100vw)"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab className="glass-container" width="50%">
                Login
              </Tab>
              <Tab className="glass-container" width="50%">
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
}

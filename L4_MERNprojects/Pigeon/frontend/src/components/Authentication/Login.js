import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: "Some error",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <VStack spacing="10px" align="stretch">
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <InputGroup>
            <Input
              type={show ? "string" : "password"}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></Input>
            <InputRightAddon
              padding="0"
              color="gray.600"
              children={
                !show ? (
                  <Button className="btn" onClick={() => setShow(true)}>
                    Show
                  </Button>
                ) : (
                  <Button color="green.400" onClick={() => setShow(false)}>
                    Hide
                  </Button>
                )
              }
            />
          </InputGroup>
        </FormControl>
        <Button
          colorScheme="green"
          width="100px"
          alignSelf="center"
          marginTop="50px"
          onClick={submitHandler}
          isLoading={loading}
          onMouseDown={(e) => (e.currentTarget.style.color = "lightgreen")}
          onMouseUp={(e) => (e.currentTarget.style.color = "white")}
        >
          Login
        </Button>
        <Button
          colorScheme="blackAlpha"
          width="fit-content"
          alignSelf="center"
          marginTop="50px"
          onClick={()=>{
            setEmail("guest@example.com");
            setPassword("123456");
          }}
          isLoading={loading}
          onMouseDown={(e) => (e.currentTarget.style.color = "lightgreen")}
          onMouseUp={(e) => (e.currentTarget.style.color = "white")}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
};

export default Login;

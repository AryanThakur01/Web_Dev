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
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const data = await axios.post("http://localhost:5000/api/user", {
        name,
        email,
        password,
        pic,
      });
      toast({
        title: "Registration Successful",
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
        description: error.response.data.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select An Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Pigeon");
      data.append("cloud_name", "dghxtfee2");
      fetch("https://api.cloudinary.com/v1_1/dghxtfee2/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: "Pleae Select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      console.log("else Error");
      return;
    }
  };

  return (
    <div>
      <VStack spacing="10px" align="stretch">
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></Input>
        </FormControl>
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
        <FormControl>
          <FormLabel>Confirm Password:</FormLabel>
          <InputGroup>
            <Input
              type={show ? "string" : "password"}
              placeholder="Enter your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          />
        </FormControl>
        <Button
          colorScheme=""
          width="100px"
          alignSelf="center"
          marginTop="50px"
          onClick={submitHandler}
          isLoading={loading}
          onMouseDown={(e) => (e.currentTarget.style.color = "lightgreen")}
          onMouseUp={(e) => (e.currentTarget.style.color = "white")}
        >
          Sign Up
        </Button>
      </VStack>
    </div>
  );
};

export default SignUp;

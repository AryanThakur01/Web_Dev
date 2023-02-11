import React, { useContext, useState } from "react";
import Chats from "../components/Chats";
import Navbar from "../components/Navbar";
import "../static/screens/chatPage.css";
import { io } from "socket.io-client";
import { useSocketUrl } from "../components/ContextReducer";

export default function ChatPage() {
  const socketBackend = useContext(useSocketUrl);
  console.log(socketBackend)
  // const socket = io(`${socketBackend}`);


  // socket.on("connect", () => {
  //   socket.emit("new-user-joined", localStorage.userEmail.split("@")[0]);

  //   socket.on("user-joined", (name) => {
  //     console.log(name);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("DISCONNECTED");
  //   });
  // });

  return (
    <div>
      <Navbar />
      <div>&nbsp;</div>
      <section className="chatScreen">
        <div className="chats glass-container">
          <Chats type={"received"} />
          <Chats type={"sent"} />
        </div>
        <div className="message" style={{ zIndex: 300 }}>
          <input type="text" name="message" className="send-message" />
          <input type="button" value="Send" className="btn" />
        </div>
      </section>
    </div>
  );
}

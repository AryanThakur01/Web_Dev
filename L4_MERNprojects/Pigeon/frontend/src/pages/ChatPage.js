import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChatPage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chat");
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <div></div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

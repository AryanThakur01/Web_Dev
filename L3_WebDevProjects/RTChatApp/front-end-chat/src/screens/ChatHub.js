import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../static/screens/ChatHub.css";
import { useUrl } from "../components/ContextReducer";
import { Link } from "react-router-dom";

export default function ChatHub() {
  const [page, setPage] = useState(1);
  const [users, updateUsers] = useState({});
  const backend = useContext(useUrl);
  const getUserCards = async (page) => {
    try {
      const userList = await axios({
        method: "get",
        url: `${backend}/getUsers?page=${page}`,
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      });
      updateUsers(() => ({
        ...userList.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserCards(1);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ paddingBlockEnd: "40px" }}>&nbsp;</div>{" "}
      {/*To prevent the unnecessary movement of the navbar */}
      <div style={{ display: "flex", justifyContent: "center", marginBlock: "20px" }}>
        <Link className="btn" to="/chatPage" style={{textDecoration: "none", color: "black"}}>World Chat</Link>
        {/* <Link className="btn">World Chat</Link> */}
      </div>
      <section
        className="container"
        style={{ flexWrap: "wrap", height: "fit-content" }}
      >
        {Object.keys(users).map((key) => {
          return (
            <Card key={key} name={users[key].name} email={users[key].email} />
          );
        })}
      </section>
      <div
        style={{
          position: "relative",
          marginBottom: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {page === 1 ? (
          <></>
        ) : (
          <button
            className="btn"
            onClick={(e) => {
              window.scrollTo(0, 0);
              getUserCards(page - 1);
              setPage(page - 1);
            }}
          >
            {"<"}
          </button>
        )}
        <button
          className="btn"
          value={1}
          onClick={(e) => {
            getUserCards(page + 1);
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

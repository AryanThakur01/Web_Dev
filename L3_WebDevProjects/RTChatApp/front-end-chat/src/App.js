import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { DataProviderHead } from "./components/ContextReducer";
import ChatHub from "./screens/ChatHub";
import ChatPage from "./screens/ChatPage";

function App() {
  return (
    <>
      <DataProviderHead>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signUp" element={<SignUp />}></Route>
              <Route exact path="/chatHub" element={<ChatHub />}></Route>
              <Route exact path="/chatPage" element={<ChatPage />}></Route>
            </Routes>
          </div>
        </Router>
      </DataProviderHead>
    </>
  );
}

export default App;

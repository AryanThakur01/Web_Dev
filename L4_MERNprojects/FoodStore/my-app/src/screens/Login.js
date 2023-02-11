import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      await axios
        .post("http://localhost:5000/identity/login", { ...credentials })
        .then((res) => {
          console.log(res.data.token);
          response = res;
        });

      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("accessToken", response.data.token);
      // console.log(localStorage);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            I am new
          </Link>
        </form>
      </div>
    </>
  );
}

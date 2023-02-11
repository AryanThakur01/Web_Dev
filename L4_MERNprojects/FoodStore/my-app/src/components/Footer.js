import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <hr />
      <div className="text-center p-3">
        © 2020 Copyright:
        <Link className="text-white" to="https://mdbootstrap.com/">
          MDBootstrap.com
        </Link>
      </div>
    </footer>
  );
}

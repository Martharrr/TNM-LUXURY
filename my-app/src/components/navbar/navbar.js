import React from "react";
import "./navbar.css";
import Button from "@/components/button/button";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="images/TNM (1).png" alt="logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="nav-link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/sb">
          <img src="images/SHOPPING BAG.png" alt="icon" className="icon" />
        </a>
        <Button
          color="pink"
          label="login"
          onclick={() => console.log("Button clicked")}
        />
      </div>
    </div>
  );
};

export default Navbar;

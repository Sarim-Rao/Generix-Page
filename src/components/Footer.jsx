import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsXbox } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container">

    <footer className="footer">
      <p> &copy; 2023 All right reserved - Generix</p>

      <div className="footer-icons">
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <BsXbox />
      </div>
    </footer>
    </div>
  );
};

export default Footer;

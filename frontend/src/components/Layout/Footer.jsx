import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Suryateja Jennu</div>
      <div>
        <Link to={"https://www.youtube.com/@suryatejajennu6414"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/suryateja-jennu-6011a8217"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/suryateja._.chintu/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
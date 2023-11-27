import React from "react";
import "./NavBar.scss";
import { BsSearch, BsFullscreenExit } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { FaDownload } from "react-icons/fa";
import ProfileAvatar from "./images/profile.jpg";
function NavBar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search...." />
          <BsSearch />
        </div>
        <div className="items">
          <div className="item">
            <FaDownload className="icon" />
            Get Report
          </div>
          <div className="item">
            <AiOutlineGlobal className="icon" />
            English
          </div>

          <div className="item">
            <BsFullscreenExit className="icon" />
          </div>

          <div className="item">
            <BiMoon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item">
            <IoMdNotificationsOutline className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <BiMessage className="icon" />
            <div className="counter">3</div>
          </div>

          <div className="item">
            <AiOutlineUnorderedList className="icon" />
          </div>
          <div className="item">
            <img src={ProfileAvatar} className="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

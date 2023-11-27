import React from "react";
import "./SideBar.scss";
import { BiSolidDashboard, BiLogInCircle } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GoLaw } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { SiDwavesystems } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
function SideBar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top1">
        <Link to="/" className="logo-link">
          {" "}
          <span className="logo" style={{ textDecoration: "none" }}>
            Joshua Admin
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <BiSolidDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <SlCalender className="icon" />
            <Link to="/calender" className="tour-link">
              <span>Calender</span>
            </Link>
          </li>
          <p className="title">List</p>
          <li>
            <GoLaw className="icon" />
            <Link to="/tours" className="tour-link">
              <span>Lawyers</span>
            </Link>
          </li>

          <li>
            <FaUsers className="icon" />
            <Link to="/users" className="tour-link">
              <span>Users</span>
            </Link>
          </li>
          <p className="title">services</p>
          <li>
            <BsFillCalendar2HeartFill className="icon" />
            <span>Cases</span>
          </li>

          <li>
            <SiDwavesystems className="icon" />
            <span> Case Management</span>
          </li>
          <p className="title">AUTHENTICATION</p>
          <li>
            <IoIosNotifications className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <IoIosNotifications className="icon" />
            <span>FAQ</span>
          </li>
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <FiSettings className="icon" />
            <span> System Settings</span>
          </li>

          <li>
            <BiLogInCircle className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default SideBar;

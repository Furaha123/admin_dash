import React from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import "../calendar/calender.scss";
import Calenda from "./Calenda";

function Calender() {
  return (
    <div className="calender">
      <SideBar />
      <div className="calender-container">
        <NavBar />
        <Calenda />
      </div>
    </div>
  );
}

export default Calender;

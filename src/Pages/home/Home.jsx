import React from "react";
import "../home/Home.scss";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import Widget from "../../Components/widget/Widget";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" amount={150} diff={20} />
          <Widget type="booking" amount={200} diff={30} />
          <Widget type="tour" amount={120} diff={15} />
          <Widget type="pending" amount={180} diff={25} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Case submited rate " aspect={2 / 1} />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./tour.scss";
import { DataGrid } from "@mui/x-data-grid";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Lawyer1 from "./images/lawyer1.jpg";
import Lawyer2 from "./images/lawyer2.jpg";
import Lawyer3 from "./images/lawyer3.jpg";
import Lawyer4 from "./images/lawyer4.jpeg";
import Lawyer5 from "./images/lawyer5.webp";
import Lawyer6 from "./images/lawyer6.jpg";
import Lawyer7 from "./images/lawyer7.jpg";
import Lawyer8 from "./images/lawyer8.jpg";
import Lawyer9 from "./images/lawyer9.jpg";
import Lawyer10 from "./images/lawyer10.jpg";
import { LiaSearchSolid } from "react-icons/lia";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton1">
            <BiSolidEditAlt />
          </div>
          <div className="deleteButton1">
            <MdDelete />
          </div>
        </div>
      );
    },
  },
];

const columns = [
  {
    field: "destination",
    headerName: "Lawyers",
    width: 220,
    renderCell: (params) => (
      <div className="lawyers-cell">
        <img src={params.row.image} alt="Profile" className="profile-image" />
        <div className="text-content">
          <div className="name">{params.row.destination}</div>
          <div className="email">{params.row.email}</div>
        </div>
      </div>
    ),
  },
  { field: "title", headerName: "Role", width: 160 },
  { field: "date", headerName: "Join Date", width: 110 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

function DataTable() {
  const [rows, setRows] = useState([
    {
      _id: "1",

      destination: "John Doe",
      email: "john.doe@gmail.com",
      title: "Attorney",
      status: "Active",
      image: Lawyer1,
      date: "09/22/2023",
    },
    {
      _id: "2",

      destination: "Jane Smith",
      email: "jane.smith@gmail.com",
      title: "Legal Consultant",
      status: "Pending",
      image: Lawyer2,
      date: "09/22/2023",
    },
    {
      _id: "3",

      destination: "Racheal Aline",
      email: "rachae@gmail.com",
      title: "Family Lawyer",
      status: "Active",
      image: Lawyer3,
      date: "02/22/2023",
    },

    {
      _id: "4",

      destination: "Moses Meech",
      email: "meech@gmail.com",
      title: "Criminal Lawyer",
      status: "Pending",
      image: Lawyer4,
      date: "01/22/2022",
    },

    {
      _id: "5",

      destination: "Victor Dave",
      email: "victor@gmail.com",
      title: "Propery Lawyer",
      status: "Active",
      image: Lawyer5,
      date: "03/22/2022",
    },
    {
      _id: "6",

      destination: "Delphine Dev",
      email: "delpha@gmail.com",
      title: "Tax Lawyer",
      status: "Pending",
      image: Lawyer6,
      date: "05/12/2021",
    },
  ]);

  return (
    <div className="tourtable">
      <SideBar />
      <div className="tourtableContainer">
        <NavBar />
        <div className="datatable">
          <div class="toolbar">
            <h2>Available Lawyers</h2>
            <div class="search-bar">
              <input type="text" placeholder="Search" />
              <LiaSearchSolid className="icon" />
            </div>
          </div>

          <DataGrid
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSize={6}
            checkboxSelection
            getRowId={(row) => row._id}
            style={{ width: "80%", marginRight: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DataTable;

import React, { useEffect, useState } from "react";
import "./applicationList.css";
import { fs } from "../../Firebase";
import { Link } from "react-router-dom";
import {
  getDocs,
  collection,
  doc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";

export default function ApplicationList({ applications }) {
  useEffect(() => {
    console.log("Applications:", applications);
  }, [applications]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      description: "ID from database",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      description: "The applicant's full name",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
    },
    {
      field: "email",
      headerName: "Mail",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "motivation",
      headerName: "Motivation",
      description: "This column contains the applicant's 'why reason'",
      sortable: false,
      width: 200,
    },
    {
      field: "Options",
      headerName: "Options",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/applicants/" + params.row.id}>
              <button className="applicationListShowMore">
                See Application
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 500,
    },
  ];

  // useEffect(() => {
  //   console.log(applications);
  //   let nonting = applications.length;
  //   console.log("Antal appliocationer: ", nonting);
  // }, [applications]);

  return (
    <div className="applicationList">
      <DataGrid
        rows={applications}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
// getDocs ska användas tillsammasns med collection, den hämtar alla dokument-
// från en viss collection.

// const rows = [
//   {
//     id: 1,
//     name: "Kenny Lam",
//     age: 473,
//     mail: "MrMiyagi@gmail.com",
//     motivation: "I love techover",
//   },
//   { id: 2, name: "Cersei", age: 42, mail: "Cersei@gmail.com" },
//   {
//     id: 3,
//     name: "Jaime",
//     age: 45,
//     mail: "Jaime@gmail.com",
//     motivation: "Money",
//   },
//   { id: 4, name: "Arya", age: 16, mail: "Arya@hotmail.com" },
//   { id: 5, name: "Daenerys", age: null },
//   { id: 6, name: null, age: 150, mail: "unknown@gmail.com" },
//   { id: 7, name: "Ferrara", age: 44, mail: "Ferrara@gmail.com" },
//   { id: 8, name: "Rossini", age: 36, mail: "Rossini@gmail.com" },
//   { id: 9, name: "Harvey", age: 65, mail: "Harvey@gmail.com" },
// ];

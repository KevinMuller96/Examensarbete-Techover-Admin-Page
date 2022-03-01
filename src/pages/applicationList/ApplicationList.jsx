import React, { useEffect } from 'react';
import "./applicationList.css";
import { fs } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore"
import { DataGrid } from '@mui/x-data-grid';
import {AllOut} from "@material-ui/icons";
import {Expand} from "@material-ui/icons";



export default function ApplicationList() {
    useEffect(() => {
      getDocs(collection(fs, "Applications")).then(
          (docs) => docs.forEach(
              (doc) => console.log(doc.id, doc.data()
              ))); 
    }, []);

    const columns = [
      { field: 'id', headerName: 'ID', width: 100, description: "ID from database" },
      { field: 'name', headerName: 'Name', width: 170, description: "The applicant's full name"},
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
      },
      {
        field: 'mail',
        headerName: 'Mail',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
      }, 
      { 
        field: 'motivation',
        headerName: 'Motivation', 
        description: "This column contains the applicant's 'why reason'", 
        sortable: false, 
        width: 200,
      },
      {
        field: "Test Field", 
        headerName: 'Test Field', 
        width: 200,
        renderCell: (params) => {
          return (
            <>
            <button className="applicationListShowMore">See Application</button>
            </>
          );
        },
      },
    ];
    
    const rows = [
      { id: 1, name: 'Benny Lam', age: 473, mail: 'MrMiyagi@gmail.com', motivation: "I love techover"},
      { id: 2, name: 'Cersei', age: 42, mail: 'Cersei@gmail.com'},
      { id: 3, name: 'Jaime', age: 45, mail: 'Jaime@gmail.com', motivation: "Money"},
      { id: 4, name: 'Arya', age: 16, mail: 'Arya@hotmail.com'},
      { id: 5, name: 'Daenerys', age: null },
      { id: 6, name: null, age: 150, mail: 'unknown@gmail.com'},
      { id: 7, name: 'Ferrara', age: 44, mail: 'Ferrara@gmail.com'},
      { id: 8, name: 'Rossini', age: 36, mail: 'Rossini@gmail.com'},
      { id: 9, name: 'Harvey', age: 65, mail: 'Harvey@gmail.com'},
    ];
    
    
  return (
    <div className="applicationList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    
  )
}
// getDocs ska användas tillsammasns med collection, den hämtar alla dokument- 
// från en viss collection. 
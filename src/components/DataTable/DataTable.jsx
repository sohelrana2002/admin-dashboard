import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data/Data";
import { NavLink } from "react-router-dom";
import "./DataTable.scss";


const DataTable = () => {
  const [rowData, setRowData] = useState(userRows);

  const handleDeleteRow = (id) =>{
    setRowData(rowData.filter(item =>item.id !== id));
  }
    
    const actionColumn =[
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params)=>{
                return (
                  <div className="cellAction">
                    <NavLink to="/users/test">
                      <div className="viewButton">View</div>
                    </NavLink>
                    <div
                      className="deleteButton"
                      onClick={() => handleDeleteRow(params.row.id)}
                    >
                      Delete
                    </div>
                  </div>
                );
            }
        }
    ]
  return (
    <div className="data_table">
      <div className="dataTable__title">
        Add New User 
        <NavLink to='/users/new'>
          Add New
        </NavLink>
      </div>
      <DataGrid
        rows={rowData}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 10]}
        checkboxSelection
        className="dataGrid"
      />
    </div>
  );
};

export default DataTable;

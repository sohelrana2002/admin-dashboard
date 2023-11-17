import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data/Data";
import "./DataTable.scss";


const DataTable = () => {
    
    const actionColumn =[
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: ()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="data_table">
      <DataGrid
        rows={userRows}
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

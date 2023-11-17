import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rowsData } from "../../data/Data";

import "./TableList.scss";



const TableList = () => {
  return (
    <TableContainer component={Paper} className="tableList">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">Tracking ID</TableCell>
            <TableCell className="tableHead">Products</TableCell>
            <TableCell className="tableHead">Customer</TableCell>
            <TableCell className="tableHead">Date</TableCell>
            <TableCell className="tableHead">Amount</TableCell>
            <TableCell className="tableHead">Payment Method</TableCell>
            <TableCell className="tableHead">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell"> {row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="Products Images" className="images" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;

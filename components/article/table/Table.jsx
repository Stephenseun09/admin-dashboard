import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { rows } from "../../../data/navdata";
import classes from "./Table.module.scss";

const TransactionList = () => {
  return (
    <div>
      <div className={classes.heading}>
        <h3>Latest transactions</h3>
      </div>
      <TableContainer component={Paper} className={classes.table}>
        <Table
          sx={{ minWidth: "100%", overflowX: "scroll" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Tracking ID</TableCell>
              <TableCell className={classes.tableCell}>Product</TableCell>
              <TableCell className={classes.tableCell}>Customer</TableCell>
              <TableCell className={classes.tableCell}>Date</TableCell>
              <TableCell className={classes.tableCell}>Amount</TableCell>
              <TableCell className={classes.tableCell}>
                Payment Method
              </TableCell>
              <TableCell className={classes.tableCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableCell}>{row.id}</TableCell>
                <TableCell className={classes.tableCell}>
                  <div className={classes.cellWrapper}>
                    <Image
                      src={row.img}
                      alt={row.product}
                      height="32px"
                      width="32px"
                      className={classes.image}
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.customer}
                </TableCell>
                <TableCell className={classes.tableCell}>{row.date}</TableCell>
                <TableCell className={classes.tableCell}>
                  {row.amount}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.method}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <span
                    className={`${classes.status} ${
                      row.status === "Pending"
                        ? classes.Pending
                        : classes.Approved
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;

import { FC } from "react";
import "../styles/TableView.css";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@material-ui/core";

interface TableViewProps {
    data: string[][];
}

const TableView: FC<TableViewProps> = ({ data }) => {
    return (
        <Table className="table-view-main-table">
            <TableHead>
                <TableRow>
                    {data[0]?.map((header, index) => (
                        <TableCell key={index}>{header}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.slice(1).map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                style={
                                    cellIndex === 0
                                        ? { fontWeight: "bold" }
                                        : {}
                                }
                            >
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableView;

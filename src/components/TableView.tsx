import { useEffect, useState, FC } from "react";
import { Box, Typography } from "@mui/material";
import Papa from "papaparse";

import { parseFileName } from "../utils/parseFileName";

interface TableViewProps {
    csvFilePath: string;
    fileName: string;
    colors: any;
}

const csvFileCache: { [key: string]: string[][] } = {};

const TableView: FC<TableViewProps> = ({
    csvFilePath,
    fileName: csvFileName,
    colors,
}) => {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        if (csvFileCache[csvFilePath]) {
            setData(csvFileCache[csvFilePath]);
        } else {
            Papa.parse(csvFilePath, {
                download: true,
                complete: (result) => {
                    const parsedData = result.data as string[][];
                    csvFileCache[csvFilePath] = parsedData;
                    setData(parsedData);
                },
            });
        }
    }, [csvFilePath]);

    useEffect(() => {
        document.title = "R: " + parseFileName(csvFileName);
    }, [csvFileName]);

    return (
        <Box className="table-view-container">
            <Box className="table-view-header">
                <Typography variant="h1" color={colors.grey[100]}>
                    {parseFileName(csvFileName)}
                </Typography>
            </Box>
            <Box className="table-view-content">
                <table>
                    <thead>
                        <tr>
                            {data[0]?.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </Box>
    );
};

export default TableView;

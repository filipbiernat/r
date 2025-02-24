import { useEffect, useState, FC } from "react";
import Papa from "papaparse";
import { Typography } from "@mui/material";

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
        <div
            style={{
                flexGrow: 1,
            }}
        >
            <div
                style={{
                    width: "100%",
                    padding: "20px",
                    position: "relative",
                }}
            >
                <Typography variant="h1" color={colors.grey[100]}>
                    {parseFileName(csvFileName)}
                </Typography>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "calc(100% - 100px)",
                    position: "relative",
                    overflowY: "scroll",
                    padding: "20px",
                }}
            >
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
            </div>
        </div>
    );
};

export default TableView;

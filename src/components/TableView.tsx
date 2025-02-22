import { useEffect, useState, FC } from "react";
import Papa from "papaparse";

import { parseFileName } from "../utils/parseFileName";

interface TableViewProps {
    csvFilePath: string;
    fileName: string;
}

const csvFileCache: { [key: string]: string[][] } = {};

const TableView: FC<TableViewProps> = ({
    csvFilePath,
    fileName: csvFileName,
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
        <div>
            <h1>{parseFileName(csvFileName)}</h1>
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
    );
};

export default TableView;

import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface TableViewProps {
    filePath: string;
}

const TableView: React.FC<TableViewProps> = ({ filePath }) => {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        Papa.parse(filePath, {
            download: true,
            complete: (result) => {
                setData(result.data as string[][]);
            },
        });
    }, [filePath]);

    return (
        <div>
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

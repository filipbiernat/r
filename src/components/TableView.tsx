import { FC } from "react";

interface TableViewProps {
    data: string[][];
}

const TableView: FC<TableViewProps> = ({ data }) => {
    return (
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
    );
};

export default TableView;

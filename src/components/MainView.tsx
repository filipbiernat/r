import { useEffect, useState, FC } from "react";
import { Box, Typography } from "@mui/material";
import Papa from "papaparse";

import { parseFileName } from "../utils/parseFileName";
import { processCsvData } from "../utils/processCsvData";
import TableView from "./TableView";

interface MainViewProps {
    csvFilePath: string;
    fileName: string;
    colors: any;
}

const csvFileCache: { [key: string]: string[][] } = {};

const MainView: FC<MainViewProps> = ({
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
                    const processedData = processCsvData(parsedData);
                    csvFileCache[csvFilePath] = processedData;
                    setData(processedData);
                },
            });
        }
    }, [csvFilePath]);

    useEffect(() => {
        document.title = "R: " + parseFileName(csvFileName);
    }, [csvFileName]);

    return (
        <Box className="main-view-container">
            <Box className="main-view-header">
                <Typography variant="h1" color={colors.grey[100]}>
                    {parseFileName(csvFileName)}
                </Typography>
            </Box>
            <Box className="main-view-content">
                <TableView data={data} />
            </Box>
        </Box>
    );
};

export default MainView;

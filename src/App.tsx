import { useEffect, useState, FC } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider, Theme } from "@mui/material";

import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import { convertPolishChars } from "./utils/convertPolishChars";
import { ColorModeContext, useMode } from "./styles/theme";

const GITHUB_API_URL =
    "https://api.github.com/repos/filipbiernat/RScraper/contents/data";
const GITHUB_RAW_URL =
    "https://raw.githubusercontent.com/filipbiernat/RScraper/master/data";

const App: FC = () => {
    const [csvFiles, setCsvFiles] = useState<string[]>([]);
    const [theme, colorMode] = useMode() as [
        Theme,
        { toggleColorMode: () => void }
    ];

    useEffect(() => {
        fetch(GITHUB_API_URL)
            .then((response) => response.json())
            .then((data) => {
                const csvFiles = data
                    .filter((file: any) => file.name.endsWith(".csv"))
                    .map((file: any) => file.name.replace(".csv", ""));
                setCsvFiles(csvFiles);
            });
    }, []);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <div
                        style={{
                            display: "flex",
                            height: "100vh",
                            overflow: "hidden",
                        }}
                    >
                        <Sidebar csvFiles={csvFiles} />
                        <div
                            style={{
                                padding: "20px",
                                flexGrow: 1,
                                overflowY: "auto",
                            }}
                        >
                            <Routes>
                                {csvFiles.length > 0 && (
                                    <Route
                                        path="/"
                                        element={
                                            <Navigate
                                                to={`/${convertPolishChars(
                                                    csvFiles[0]
                                                )}`}
                                            />
                                        }
                                    />
                                )}
                                {csvFiles.map((csvFile) => (
                                    <Route
                                        key={csvFile}
                                        path={`/${convertPolishChars(csvFile)}`}
                                        element={
                                            <TableView
                                                csvFilePath={`${GITHUB_RAW_URL}/${csvFile}.csv`}
                                                fileName={csvFile}
                                            />
                                        }
                                    />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;

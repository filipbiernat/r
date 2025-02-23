import { useEffect, useState, FC } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider, Theme } from "@mui/material";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import { replacePolishChars } from "./utils/replacePolishChars";
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
                    <ContainerForSidebarAndView>
                        <Sidebar csvFiles={csvFiles} />
                        <ContenerForView>
                            <Routes>
                                {csvFiles.length > 0 && (
                                    <Route
                                        path="/"
                                        element={
                                            <Navigate
                                                to={`/${replacePolishChars(
                                                    csvFiles[0]
                                                )}`}
                                            />
                                        }
                                    />
                                )}
                                {csvFiles.map((csvFile) => (
                                    <Route
                                        key={csvFile}
                                        path={`/${replacePolishChars(csvFile)}`}
                                        element={
                                            <TableView
                                                csvFilePath={`${GITHUB_RAW_URL}/${csvFile}.csv`}
                                                fileName={csvFile}
                                            />
                                        }
                                    />
                                ))}
                            </Routes>
                        </ContenerForView>
                    </ContainerForSidebarAndView>
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

const ContainerForSidebarAndView = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
`; // The view appears on the RHS of the sidebar.

const ContenerForView = styled.div`
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
`; // The view is scrollable.

export default App;

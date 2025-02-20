import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import { convertPolishChars } from "./utils/convertPolishChars";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

const GITHUB_API_URL =
    "https://api.github.com/repos/filipbiernat/RScraper/contents/data";
const GITHUB_RAW_URL =
    "https://raw.githubusercontent.com/filipbiernat/RScraper/master/data";

const App: React.FC = () => {
    const [csvFiles, setCsvFiles] = useState<string[]>([]);

    useEffect(() => {
        fetch(GITHUB_API_URL)
            .then((response) => response.json())
            .then((data) => {
                const csvFiles = data
                    .filter((file: any) => file.name.endsWith(".csv"))
                    .map((file: any) => file.name);
                setCsvFiles(csvFiles);
            });
    }, []);

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <Sidebar csvFiles={csvFiles} />
                <div style={{ marginLeft: "200px", padding: "20px" }}>
                    <Routes>
                        {csvFiles.length > 0 && (
                            <Route
                                path="/"
                                element={
                                    <Navigate
                                        to={`/${convertPolishChars(
                                            csvFiles[0].replace(".csv", "")
                                        )}`}
                                    />
                                }
                            />
                        )}
                        {csvFiles.map((csvFile) => (
                            <Route
                                key={csvFile}
                                path={`/${convertPolishChars(
                                    csvFile.replace(".csv", "")
                                )}`}
                                element={
                                    <TableView
                                        csvFilePath={`${GITHUB_RAW_URL}/${csvFile}`}
                                        fileName={csvFile.replace(".csv", "")}
                                    />
                                }
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

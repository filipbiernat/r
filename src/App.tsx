import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import { convertPolishChars } from "./utils/convertPolishChars";

const GITHUB_API_URL =
    "https://api.github.com/repos/filipbiernat/RScraper/contents/data";

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
                        {csvFiles.map((file) => (
                            <Route
                                key={file}
                                path={`/${convertPolishChars(
                                    file.replace(".csv", "")
                                )}`}
                                element={
                                    <TableView
                                        filePath={`https://raw.githubusercontent.com/filipbiernat/RScraper/master/data/${file}`}
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


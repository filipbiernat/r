import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ marginLeft: "200px", padding: "20px" }}>
                    <Routes>
                        <Route
                            path="/table/Hiszpanskie_El_Clasico__Katowice__1os"
                            element={
                                <TableView filePath="/src/data/Hiszpanskie_El_Clasico__Katowice__1os.csv" />
                            }
                        />
                        <Route
                            path="/table/Living_in_America__Warszawa__1os"
                            element={
                                <TableView filePath="/src/data/Living_in_America__Warszawa__1os.csv" />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;


import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Sidebar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div>
            <TitleBar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <App />
            </div>
        </div>
    </React.StrictMode>
);


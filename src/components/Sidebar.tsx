import React from "react";

const Sidebar: React.FC = () => {
    return (
        <div
            style={{
                width: "200px",
                backgroundColor: "#f8f9fa",
                padding: "10px",
            }}
        >
            <h2>Options</h2>
            <ul>
                <li>
                    <input type="checkbox" /> Option 1
                </li>
                <li>
                    <input type="checkbox" /> Option 2
                </li>
                <li>
                    <input type="checkbox" /> Option 3
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

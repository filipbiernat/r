import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    return (
        <div>
            <ul>
                {csvFiles.map((file) => (
                    <li key={file}>
                        <Link to={`/table/${file.replace(".csv", "")}`}>
                            {file.replace(".csv", "")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

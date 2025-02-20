import React from "react";
import { Link } from "react-router-dom";
import { convertPolishChars } from "../utils/convertPolishChars";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    return (
        <div>
            <ul>
                {csvFiles.map((file) => {
                    const displayName = file.replace(".csv", "");
                    const pathName = convertPolishChars(displayName);
                    return (
                        <li key={file}>
                            <Link to={`/${pathName}`}>{displayName}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;

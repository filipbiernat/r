import React from "react";
import { Link } from "react-router-dom";
import { convertPolishChars } from "../utils/convertPolishChars";
import { parseFileName } from "../utils/parseFileName";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    return (
        <div>
            <ul>
                {csvFiles.map((file) => {
                    const fileNameWithoutSuffix = file.replace(".csv", "");
                    const displayName = parseFileName(fileNameWithoutSuffix);
                    const pathName = convertPolishChars(fileNameWithoutSuffix);
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

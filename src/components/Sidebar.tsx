import React from "react";
import { convertPolishChars } from "../utils/convertPolishChars";
import { parseFileName } from "../utils/parseFileName";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                {csvFiles.map((file) => {
                    const fileNameWithoutSuffix = file.replace(".csv", "");
                    const displayName = parseFileName(fileNameWithoutSuffix);
                    const pathName = convertPolishChars(fileNameWithoutSuffix);
                    return (
                        <MenuItem key={file}>
                            <Typography>{displayName}</Typography>
                            <Link to={`/${pathName}`} />
                        </MenuItem>
                    );
                })}
            </Menu>
        </ProSidebar>
    );
};

export default Sidebar;

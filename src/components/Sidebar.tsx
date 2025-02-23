import { useState, useEffect, FC } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import { Box, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";

import { replacePolishChars as replacePolishChars } from "../utils/replacePolishChars";
import { tokens } from "../styles/theme";
import { sidebarStyles } from "../styles/sidebarStyles";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: FC<SidebarProps> = ({ csvFiles }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const path = window.location.pathname.substring(1); // Remove leading '/'
        const fileName = csvFiles.find((fileName) => {
            return replacePolishChars(fileName) === path;
        });
        setSelected(fileName || csvFiles[0] || "");
    }, [csvFiles]);

    return (
        <Box
            className="sideBar"
            sx={sidebarStyles(colors)}
            style={{ height: "100%" }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <SidebarHeader
                        isCollapsed={isCollapsed}
                        setIsCollapsed={setIsCollapsed}
                        colors={colors}
                    />

                    {!isCollapsed && (
                        <SidebarMenu
                            csvFiles={csvFiles}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;

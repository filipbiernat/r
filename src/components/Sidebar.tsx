import { useState, useEffect, FC } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import { Box } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";

import { replacePolishChars as replacePolishChars } from "../utils/replacePolishChars";
import { sidebarStyles } from "../styles/sidebarStyles";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
    csvFiles: string[];
    colors: any;
    isSidebarCollapsed: boolean;
    setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
    csvFiles,
    colors,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
}) => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const path = window.location.pathname.substring(1); // Remove leading '/'
        const fileName = csvFiles.find((fileName) => {
            return replacePolishChars(fileName) === path;
        });
        setSelected(fileName || csvFiles[0] || "");
    }, [csvFiles]);

    return (
        <Box sx={sidebarStyles(colors)} className="full-height">
            <ProSidebar collapsed={isSidebarCollapsed}>
                <Menu iconShape="square">
                    <SidebarHeader
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                        colors={colors}
                    />

                    {!isSidebarCollapsed && (
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

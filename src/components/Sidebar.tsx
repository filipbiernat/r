import React, { useState } from "react";
import { convertPolishChars } from "../utils/convertPolishChars";
import { parseFileName } from "../utils/parseFileName";
import { tokens } from "../theme";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard"); //FIXME FB from first file

    return (
        <Container>
            <Box
                className="sideBar"
                sx={{
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[400]} !important`,
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",
                        background: `${colors.primary[450]}`,
                    },
                }}
            >
                <ProSidebar collapsed={isCollapsed}>
                    <Menu iconShape="square">
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={
                                isCollapsed ? <MenuOutlinedIcon /> : undefined
                            }
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography
                                        variant="h3"
                                        color={colors.grey[100]}
                                    >
                                        Wybór wyjazdu
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            setIsCollapsed(!isCollapsed)
                                        }
                                    >
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {csvFiles.map((file) => {
                            const fileNameWithoutSuffix = file.replace(
                                ".csv",
                                ""
                            );
                            const displayName = parseFileName(
                                fileNameWithoutSuffix
                            );
                            const pathName = convertPolishChars(
                                fileNameWithoutSuffix
                            );
                            return (
                                <MenuItem
                                    key={file}
                                    active={selected === file}
                                    onClick={() => setSelected(file)}
                                >
                                    <Link to={`/${pathName}`}>
                                        <Typography>{displayName}</Typography>
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </ProSidebar>
            </Box>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
    height: 100vh;
`;

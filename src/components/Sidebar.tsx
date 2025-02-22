import React, { useState } from "react";
import { convertPolishChars } from "../utils/convertPolishChars";
import { parseFileName } from "../utils/parseFileName";
import { tokens } from "../styles/theme";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";
import { sidebarStyles } from "../styles/sidebarStyles";

interface SidebarProps {
    csvFiles: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ csvFiles }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState(0);

    return (
        <Container>
            <Box className="sideBar" sx={sidebarStyles(colors)}>
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

                        {csvFiles.map((fileNameWithSuffix, index) => {
                            const fileName = fileNameWithSuffix.replace(
                                ".csv",
                                ""
                            );
                            return (
                                <MenuItem
                                    key={index}
                                    active={selected === index}
                                    onClick={() => setSelected(index)}
                                >
                                    <Link
                                        to={`/${convertPolishChars(fileName)}`}
                                    >
                                        <Typography>
                                            {parseFileName(fileName)}
                                        </Typography>
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

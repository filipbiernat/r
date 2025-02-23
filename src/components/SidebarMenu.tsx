import { FC } from "react";
import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { replacePolishChars } from "../utils/replacePolishChars";
import { parseFileName } from "../utils/parseFileName";
import styled from "styled-components";

interface SidebarMenuProps {
    csvFiles: string[];
    selected: string;
    setSelected: (fileName: string) => void;
}

const SidebarMenu: FC<SidebarMenuProps> = ({
    csvFiles,
    selected,
    setSelected,
}) => {
    return (
        <>
            {csvFiles.map((fileName, index) => (
                <MenuItem
                    key={index}
                    active={selected === fileName}
                    onClick={() => setSelected(fileName)}
                >
                    <Link to={`/${replacePolishChars(fileName)}`}>
                        <LongTextTypography>
                            {parseFileName(fileName)}
                        </LongTextTypography>
                    </Link>
                </MenuItem>
            ))}
        </>
    );
};

const LongTextTypography = styled(Typography)`
    white-space: normal;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`; // Makes the text wrapped and adds ellipsis (...) if it's too long.

export default SidebarMenu;

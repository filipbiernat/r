import { FC } from "react";
import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { replacePolishChars } from "../utils/replacePolishChars";
import { parseFileName } from "../utils/parseFileName";

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
                        <Typography>{parseFileName(fileName)}</Typography>
                    </Link>
                </MenuItem>
            ))}
        </>
    );
};

export default SidebarMenu;

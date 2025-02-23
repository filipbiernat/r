import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

interface SidebarHeaderProps {
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
    colors: any;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({
    isCollapsed,
    setIsCollapsed,
    colors,
}) => {
    return (
        <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
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
                    <Typography variant="h3" color={colors.grey[100]}>
                        Wybór wyjazdu
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                    </IconButton>
                </Box>
            )}
        </MenuItem>
    );
};

export default SidebarHeader;

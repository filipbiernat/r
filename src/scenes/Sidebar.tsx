import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";

const Sidebar: React.FC = () => {
    return (
        <ProSidebar>
            <Menu>
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </Menu>
        </ProSidebar>
    );
};

export default Sidebar;

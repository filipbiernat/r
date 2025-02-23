export const sidebarStyles = (colors: any) => ({
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
    "& .pro-sidebar": {
        width: "360px",
        minWidth: "360px",
    },
    "& .pro-sidebar.collapsed": {
        width: "80px",
        minWidth: "80px",
    },
});

import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/table/Hiszpanskie_El_Clasico__Katowice__1os">
                        Hiszpanskie_El_Clasico__Katowice__1os
                    </Link>
                </li>
                <li>
                    <Link to="/table/Living_in_America__Warszawa__1os">
                        Living_in_America__Warszawa__1os
                    </Link>
                </li>
                {/* Dodaj więcej linków do innych tabel w razie potrzeby */}
            </ul>
        </div>
    );
};

export default Sidebar;

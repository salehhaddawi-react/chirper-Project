import React from "react";
import {NavLink} from "react-router-dom";

export default function nav () {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new" exact activeClassName="active">
                        New Tweet
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

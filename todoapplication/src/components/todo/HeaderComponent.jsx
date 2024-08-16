import React from "react";

const HeaderComponent = () => {
    return(
        <header className={"header"}>
            <div className={"container"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                        <a href={"https://www.in28minutes.com"} className={"nav-link"} target={"_blank"}>in28minutes</a>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default HeaderComponent;
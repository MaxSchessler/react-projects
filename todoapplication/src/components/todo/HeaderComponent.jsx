import React from "react";

const HeaderComponent = () => {
    return(
        <div className={"header"}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <span>Header</span>
            </div>
            <br/>
        </div>
    );
}

export default HeaderComponent;
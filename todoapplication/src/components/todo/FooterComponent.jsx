import React from "react";

const FooterComponent = () => {
    return(
        <div className={"Footer"}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
                 >
                <span>Footer</span>
            </div>
        </div>
    );
}

export default FooterComponent;
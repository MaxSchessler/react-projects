import React, {} from "react";
import {useParams, useNavigate} from "react-router-dom";

const WelcomeComponent = () => {

    const navigate = useNavigate();

    return (
        <div className={"container"}>
            <h1 className={"welcome-header"}>Welcome!</h1>
            <div>
                <div
                    onClick={() => {
                        navigate("/todos");
                    }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "lightblue",
                        height: 30,
                        width:70,
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    <h3>Todos</h3>
                </div>
            </div>
        </div>
    );
}
export default WelcomeComponent;
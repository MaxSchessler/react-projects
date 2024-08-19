import React, {} from "react";
import {useParams, useNavigate} from "react-router-dom";

const WelcomeComponent = () => {

    const {username} = useParams();
    if (username === undefined || username === "undefined" || username === null) {
        alert("Not logged in, navigating to login screen.");
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }
    const navigate = useNavigate();

    return (
        <div className={"container"}>
            <h1 className={"welcome-header"}>Welcome {username}!</h1>
            <div>
                <div
                    onClick={() => {
                        navigate("/todos/" + username);
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
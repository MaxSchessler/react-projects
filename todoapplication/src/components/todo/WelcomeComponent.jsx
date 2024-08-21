import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import HelloWorldAPIProxy from "./API/HelloWorldAPIProxy";

const WelcomeComponent = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const helloWorldAPIProxy = new HelloWorldAPIProxy();

    return (
        <div className={"container"}>
            <h1 className={"welcome-header"}>Welcome!</h1>
            <table className={"table"}>
                <tr>
                    <td>
                        <button className={"btn btn-primary"} onClick={() => navigate("/todos")}>Manage Todos</button>
                    </td>
                    <td>
                        <button className={"btn btn-primary"} onClick={async () => {
                            console.log("Hello World");
                            helloWorldAPIProxy.getHelloWorld().then(response => alert(response.data));
                        }}>Hello World
                        </button>
                    </td>
                    <td>
                        <button className={"btn btn-primary"} onClick={async () => {
                            helloWorldAPIProxy.getHelloWorldBean().then(response => alert(response.data.message));
                        }}>Hello World Bean
                        </button>
                    </td>
                    <td>
                        <input className={"input-group-text"} type={"text"} id={"name"} placeholder={"Enter your name"} onChange={(e) => {setName(e.target.value)}}/>
                    </td>
                    <td>
                        <button className={"btn btn-primary"} onClick={async () => {
                            helloWorldAPIProxy.getHelloWorldBeanPathVariable(name).then(resp => {
                                console.log(resp);
                                console.log(resp.request.responseURL);
                                alert(resp.data.message);
                            });
                        }}>Hello World Path Variables
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
export default WelcomeComponent;
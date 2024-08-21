import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import TodoAPIService from "./API/TodoAPIService";

const ListTodosComponent = () => {
    const nav = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const api = new TodoAPIService();
        api.getAllTodos()
            .then(x => {
                setTodos(x.data);
                console.log(x.data);
            }).catch(e => console.error(e));
    }, []);

    return (
        <div className={"container"}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 80,
                        width: 30,
                    }}
                    onClick={() => nav(`/welcome`)}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} height={32} width={50}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                }}>
                    <h1>Todos</h1>
                </div>
            </div>

            <table className={"table"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Target Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(
                        (todo, index) => {
                            return (
                                <tr key={index}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? "YES" : "NO"}</td>
                                    <td>{todo.targetDate}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListTodosComponent;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";

const ListTodosComponent = () => {

    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
    const nav = useNavigate();

    const todos = [
        {id: 1, description: "Learn JS", done: false, targetDate: nextYear},
        {id: 2, description: "Learn Docker", done: false, targetDate: nextYear},
        {id: 3, description: "Clean Learn Springboot", done: false, targetDate: nextYear},
        {id: 4, description: "Learn AWS", done: false, targetDate: nextYear},
    ]


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
                        todo => {
                            return (
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? "YES" : "NO"}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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
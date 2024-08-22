import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import TodoAPIService from "./API/TodoAPIService";
import {useAuth} from "./security/AuthorizationContext";

const ListTodosComponent = () => {
    const nav = useNavigate();
    const [todos, setTodos] = useState([]);
    const authContext = useAuth();
    const [username, setUsername] = useState(authContext.username);
    const [modal, setModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});

    function deleteTodo(todo) {
        const api = new TodoAPIService();
        api.deleteTodoById("kaci", todo.id)
            .then(() => {
                setTodos(todos.filter(t => t.id !== todo.id));
            }).catch(e => console.error(e));
    }

    useEffect(() => {
        const api = new TodoAPIService();
        api.getTodosByUsername(username)
            .then(x => {
                setTodos(x.data);
            }).catch(e => console.error(e));
    }, []);

    return (
        <div className={"container"}>
            <div>
                <div>
                    <h1>Todos</h1>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        right: "17%",
                        top: "17%"
                    }}>
                        {
                            modal
                                ? <div>
                            <span
                                className={"m-2"}
                            >Delete Todo: {selectedTodo.description}?</span>


                                    <button className={"btn btn-danger"} onClick={() => {
                                        deleteTodo(selectedTodo);
                                        setModal(false);
                                    }
                                    }>Yes
                                    </button>
                                    <button className={"btn btn-warning"} onClick={() => {
                                        setModal(false)
                                    }}>No
                                    </button>
                                </div>
                                : null
                        }
                    </div>

                </div>
            </div>

            <table className={"table"}
                style={{tableLayout: "auto"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Target Date</th>
                    <th></th>{/*Delete button*/}
                </tr>
                </thead>
                <tbody>
                {
                    todos.length > 0 ?
                    todos.map(
                        (todo, index) => {
                            return (
                                <TodoRow
                                    todo={todo}
                                    key={index}
                                    selected={todo}
                                    setSelected={setSelectedTodo}
                                    setModal={setModal}
                                />
                            )
                        }
                    )
                    : <tr><td colSpan={5}>No Todos</td></tr>
                }
                </tbody>
            </table>
        </div>
    );
}

const TodoRow = ({todo, selected, setSelected, setModal}) => {

    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>{todo.done ? "YES" : "NO"}</td>
            <td>{todo.targetDate}</td>
            <td>
                <button className={"btn btn-danger"} onClick={() => {
                    setModal(true);
                    setSelected(selected);
                    console.log(selected);
                }}>Delete</button>

            </td>
        </tr>
    )
}

export default ListTodosComponent;
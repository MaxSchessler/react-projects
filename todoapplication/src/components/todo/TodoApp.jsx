
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import "../../styles/TodoApp.css"

const TodoApp = () => {

    return (
        <div className="todo-app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path={"/login"} element={<LoginComponent/>}/>
                    <Route path={"/welcome/:username"} element={<WelcomeComponent/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

const Error = () => {
    return(
        <div>
            <h1>404 Page is not found.</h1>
        </div>
    );
}

export default TodoApp;

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
                    <Route path="/welcome" element={<WelcomeComponent/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default TodoApp;
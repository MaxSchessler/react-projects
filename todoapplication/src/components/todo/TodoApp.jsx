
import React, { useState, useEffect } from "react";
import LoginComponent from "./LoginComponent";
import "../../styles/TodoApp.css"

const TodoApp = () => {

    return (
        <div className="todo-app">
            <LoginComponent/>
        </div>
    )
}

export default TodoApp;
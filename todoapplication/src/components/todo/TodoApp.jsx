
import React, {useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import "../../styles/TodoApp.css"
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthProvider from "./security/AuthorizationContext";
import {authContext} from "./security/AuthorizationContext";

const TodoApp = () => {

    return (
        <div className="todo-app">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path={"/login"} element={<LoginComponent/>}/>
                        <Route path={"/welcome"} element={<LoginComponent/>}/>
                        <Route path={"/welcome/:username"} element={<WelcomeComponent/>}/>
                        <Route path={"/todos/:username"} element={<ListTodosComponent/>}/>

                        {/* Error comp accepts all other url paths */}
                        <Route path="/*" element={<Error/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
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
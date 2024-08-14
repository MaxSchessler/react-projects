import React, { useState, useEffect } from "react";

const LoginComponent = () => {
    return (
        <div className="login">
            <div className="login-form">
                <div>
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" name="username" className="login-input"/>
                </div>
                <div>
                    <label htmlFor="password" className="login-label">Username</label>
                    <input type="password" name="password" className="login-input"/>
                </div>
                <div>
                    <button type="submit" className="login-button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
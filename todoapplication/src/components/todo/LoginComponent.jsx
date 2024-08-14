import React, { useState, useEffect } from "react";

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <div className="login-form">
                <div>
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" name="username" className="login-input"
                           value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>

                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="password" name="password" className="login-input"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="login-button" onClick={
                        () => {
                            console.log(`Username ${username}\nPassword ${password}`);
                        }
                    }>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
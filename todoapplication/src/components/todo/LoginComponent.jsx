import React, { useState, useEffect } from "react";

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleSubmit() {
        console.log(`Username: ${username}\nPassword: ${password}`);

        if (username === "maxschessler" && password === "password") {
            // show success div
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            // show error div
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="login">
            {showSuccessMessage ? <div className="successMessage">Authenticated Successfully</div> : null}
            {showErrorMessage ? <div className="loginContainer">Authentication Failed.</div>: null}
            <div className="login-form">
                <div>
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" name="username" className="login-input"
                           value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>

                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="password" name="password" className="login-input"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="login-button" onClick={
                        () => {
                            handleSubmit();
                        }
                    }>Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent;
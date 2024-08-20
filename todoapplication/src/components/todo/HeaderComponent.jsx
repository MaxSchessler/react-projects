import React, {useContext} from "react";
//import {authorizationContext} from "./security/AuthorizationContext";
import {Link, useParams} from "react-router-dom";
import {useAuth} from "./security/AuthorizationContext";

const HeaderComponent = () => {
    //const auth = useContext(authorizationContext);
    const {username} = useParams();

    const authContext = useAuth();

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                           href="https://www.in28minutes.com">in28minutes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {
                                    authContext.isAuthenticated &&
                                    <li className="nav-item fs-5"><Link className="nav-link"
                                                                        to={`/welcome/${username}`}>Home</Link></li>
                                }
                                {
                                    authContext.isAuthenticated &&
                                    <li className="nav-item fs-5"><Link className="nav-link"
                                                                        to={`/todos/${username}`}>Todos</Link></li>
                                }
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {
                                /* show login component if not authenticated else show logout component */
                                authContext.isAuthenticated ?
                                    <li className="nav-item fs-5"><Link className="nav-link" onClick={() => {
                                        authContext.logout();
                                    }} to="/">Logout</Link>
                                    </li>
                                    : <li className="nav-item fs-5"><Link className="nav-link" to="/">Login</Link></li>
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default HeaderComponent;
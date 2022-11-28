import React from "react";
import { SignInAndUp } from 'supertokens-auth-react/recipe/emailpassword';
import Session from "supertokens-auth-react/recipe/session";
import Home from "./Home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

export default function LandingPage() {
    let sessionContext = Session.useSessionContext();
    if (sessionContext.loading) {
        return null;
    }
    if (sessionContext.doesSessionExist) {
        // We wrap this with <SessionAuth /> so that
        // all claims are validated before showing the logged in UI.
        // For example, if email verification is switched on, and
        // the user's email is not verified, then <SessionAuth />
        // will redirect to the email verification page.
        return (
            <Router>
                    <div className="fill">
                        <Routes>

                            <Route
                                path="/"
                                element={                                    
                                        <Session.SessionAuth>
                                        <Home/>
                                    </Session.SessionAuth>
                                }
                            />
                        </Routes>
                    </div>
                </Router>
        )
    } else {
        return (
            <div>
                <h1 className="title">El Punto del Agua Inventario</h1>
                <SignInAndUp />
            </div>
        )
    }
}
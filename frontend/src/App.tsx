import "./App.css";
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { SuperTokensConfig } from "./config";
import LandingPage from "./LandingPage";

SuperTokens.init(SuperTokensConfig);

function App() {
    return (
        <SuperTokensWrapper>
            <div className="App">
                <LandingPage />
            </div>
        </SuperTokensWrapper>
    );
}

export default App;

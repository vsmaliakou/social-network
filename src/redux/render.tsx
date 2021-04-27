import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./redux-store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </React.StrictMode>, document.getElementById('root'));
}
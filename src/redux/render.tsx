import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./redux-store";
import { Provider } from "react-redux";

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>,  document.getElementById('root'));
}

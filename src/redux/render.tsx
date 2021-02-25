import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./store";

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,  document.getElementById('root'));
}

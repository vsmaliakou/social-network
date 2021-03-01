import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./store";
import { Provider } from "../StoreContext";

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>,  document.getElementById('root'));
}

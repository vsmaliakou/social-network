import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import React from 'react';
import './index.css';
import {renderEntireTree} from "./redux/render";

store.subscribe(renderEntireTree)
renderEntireTree()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
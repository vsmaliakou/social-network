import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/store";
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               dialogsPage={state.dialogsPage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
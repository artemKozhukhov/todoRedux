import React, {useState, useEffect} from 'react';
import TusksAdder from "./components/TusksAdder";
import Store from './store/Store';
import connect from "./store/connect";
import TuskListContainer from "./containers/TuskListContainer";
import TusksAdderContainer from "./containers/TusksAdderContainer";
import LastUpdateContainer from "./containers/LastUpdateContainer";
export default function App(){
    // let hours = Store.getState().lastUpdate.getHours();
    // let minutes = Store.getState().lastUpdate.getMinutes();
    // let seconds = Store.getState().lastUpdate.getSeconds();

    return (
        <div>
            <TuskListContainer/>
            <TusksAdderContainer/>
            <LastUpdateContainer/>
        </div>
    )
}
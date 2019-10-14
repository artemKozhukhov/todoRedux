import React, {useState, useEffect} from 'react';
import connect from "../store/connect";
import LastUpdate from "../components/LastUpdate";
import * as types from '../store/tusks/actionsTypes';
import Store from "../store/Store";

let TusksAdderContainer = (props) =>{
    let [lastUpdate, setLastUpdate] = useState(props.lastUpdate);
    useEffect(()=>{
        Store.subscribe((state)=>{
            setLastUpdate(state.lastUpdate);
        });
    });
    return (
        <LastUpdate lastUpdate={lastUpdate}/>
    )
};

let mapStateToProps = (state)=>{
  return {
      lastUpdate: state.lastUpdate
  }
};
export default connect( mapStateToProps,()=>{})(TusksAdderContainer);
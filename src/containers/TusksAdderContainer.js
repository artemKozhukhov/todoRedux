import React from 'react';
import connect from "../store/connect";
import TuskAdder from "../components/TusksAdder";
import * as types from '../store/tusks/actionsTypes';

let TusksAdderContainer = (props) =>{
    return (
        <TuskAdder addTusk={props.addTusk}/>
    )
};

let mapDispatchToProps = (dispatch)=>{
    return {
        addTusk: (text, isCompleted)=>{
            dispatch({
                type: types.ADD_TUSK,
                text,
                isCompleted
            })
        }
    }
};
export default connect(()=>{},mapDispatchToProps)(TusksAdderContainer);
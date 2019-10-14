//в Апп будем рендерить его. Контейнер для списка знает, какой элемент обворачивать и
//знает какие часте стейта из контейнера мапить на пропсы обворачиваемого элемента
import React,{useState, useEffect} from 'react';
import connect from "../store/connect";
import TuskList from "../components/TuskList";
import getTusks from "../services/getTusks";
import * as types from '../store/tusks/actionsTypes';
import Store from "../store/Store";


let TuskListContainer = (props)=>{
    let [tusks, setTusks] = useState(props.tusks);
    useEffect(()=>{
        Store.subscribe((state)=>{
            setTusks(state.tusks);
        });
        getTusks('/').then((tusks)=>{
            props.updateTucks(tusks);
        });
    },[]);

    return (
        <TuskList {...props} toggleTusk={props.toggleTusk} tusks={tusks}/>//надо при изменении хранилища как то обновлять компонент.
    )

};



let mapStateToProps = (state)=>{
    return {
        tusks: state.tusks
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        updateTucks: (tusks)=>{
            dispatch({
                type: types.FETCHED_TUSKS,
                tusks
            });
        },
        toggleTusk: (id) =>{
            dispatch({
                type: types.TOGGLE_TUSK,
                id: id
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TuskListContainer);
import reducers from "./reducers";
function createStore(reducer, initState){
    let state = initState;
    let subscribes = [];
    return {
        getState: ()=> state,
        dispatch: action => {
            state = reducer(state, action);
            console.log("new state", state);
            subscribes.forEach((fn)=>{
                fn(state);
            });
        },
        subscribe: (fn)=>{
            subscribes = [...subscribes, fn];
            fn(state);
        }
    }
}


export default createStore(reducers, {
    tusks: [],
    lastUpdate: new Date()
});
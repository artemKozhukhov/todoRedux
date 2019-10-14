import * as types from './actionsTypes';

let getNextId = (arr)=>{
    let maxId = 0;
    arr.forEach((item)=>{
        if(item.id > maxId) maxId = item.id;
    });
    return maxId+1;
};

export default (state, action)=>{
    console.log(`${action.type} in reducer`);
    switch (action.type) {
        case types.FETCHED_TUSKS:
            return Object.assign({},state,{
                tusks: action.tusks,
                lastUpdate: new Date()
            });
        case types.ADD_TUSK:
            return  Object.assign({},state,{
                tusks: [
                    ...state.tusks,
                    {
                        id: getNextId(state.tusks),
                        text: action.text,
                        isCompleted: action.isCompleted
                    }
                ],
                lastUpdate: new Date()
            });
        case types.TOGGLE_TUSK:
            return Object.assign({}, state, {
                tusks: state.tusks.map((tusk)=>{
                    if(action.id === tusk.id) tusk.isCompleted = !tusk.isCompleted;
                    return tusk;
                }),
                lastUpdate: new Date()
            });
        default:
            return state;
    }
}
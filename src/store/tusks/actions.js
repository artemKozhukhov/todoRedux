//хз нахера вообще они нужны, возможно еще один слой просто
import * as types from './actionsTypes';

export function addTusk(text, isCompleted) {
    return {
        type: types.ADD_TUSK,
        text,
        isCompleted
    }
}

export function deleteTusk(text, isCompleted) {
    return {

    }
}

export function toggleTusk(id) {
    return {
        type: types.TOGGLE_TUSK,
        id: id
    }
}
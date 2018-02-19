import {createStore} from "redux";

const reducer = function (state = {}, action) {
    if (!(action.type in state)) {
        state[action.type] = {value: "", db: action.payload};
    }

    state[action.type].value = action.payload;
    return state;
};

const store = createStore(reducer);

/* Export functions */
export function getDbValue(name) {
    return store.getState()[name].db;
}

export function getValue(name) {
    return store.getState()[name].value;
}

export function setValue(name, value) {
    store.dispatch({type: name, payload: value});
}

export function revertValue(name) {
    store.dispatch({type: name, payload: getDbValue(name)});
}

export function subscribe(name, callback) {
    store.subscribe(() => {
        callback(getValue(name))
    });
}

import initialState from "./initialState";

//Add name to list
export const addName = (state, { value }) => {
    return {
        ...state,
        names: [...state.names, {
            name: value.input,
            color: value.colorInput,
        }],
    };
};

//Remove name from list
export const removeName = (state, { index }) => {
    return {
        ...state,
        names: state.names.filter((_, i) => i !== index),
    };
};


//export default data
export default (state, action) => {
    switch (action.type) {
        case "ADD_NAME": return addName(state, action);
        case "REMOVE_NAME": return removeName(state, action);
        case "RESET": return initialState;
        default: return state;
    };
}
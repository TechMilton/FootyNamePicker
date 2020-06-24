import initialState from "./initialState";

//Add name to list
export const addName = (state, { value }) => {
    return {
        ...state,
        names: [...state.names, {
            name: value.input,
        }],
    };
};

//Remove a name from list
//content will go here


//export default data
export default (state, action) => {
    switch (action.type) {
        case "ADD_NAME": return addName(state, action);
        case "RESET": return initialState;
        default: return state;
    };
}
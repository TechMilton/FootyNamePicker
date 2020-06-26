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

//Add Team One Name -- Settings Page
export const addTeamOne = (state, { value }) => {
    return {
        ...state,
        teamOne: value.teamOne,
    };
}

//Add Team Two Name -- Settings Page
export const addTeamTwo = (state, { value }) => {
    return {
        ...state,
        teamTwo: value.teamTwo,
    };
}

//Add player counter -- Settings Page
export const addCount = (state, { value }) => {
    return {
        ...state,
        count: value.count,
    };
}

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
        case "TEAM_ONE": return addTeamOne(state, action);
        case "TEAM_TWO": return addTeamTwo(state, action);
        case "COUNT": return addCount(state, action);
        case "RESET": return initialState;
        default: return state;
    };
}

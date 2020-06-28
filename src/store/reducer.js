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

//Add Team Two Name - Settings Page
export const addTeamTwo = (state, { value }) => {
    return {
        ...state,
        teamTwo: value.teamTwo,
    };
}

//Add player counter - Settings Page
export const addCount = (state, { value }) => {
    return {
        ...state,
        count: value.count,
    };
}

export const shuffleTeam = (state) => {
    const names = state.names;
    const teamOneNames = [];
    const teamTwoNames = [];

    //Loops over each name and splits them into two lists depending if they are divisible by 2

    for (let i = 0; i < names.length; i++) {
        if (i % 2 === 0) {
            teamOneNames.push(names[i]);
        } else {
            teamTwoNames.push(names[i]);
        }
    }
    return {
        ...state,
        teamOneNames: teamOneNames,
        teamTwoNames: teamTwoNames,
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
        case "SHUFFLE": return shuffleTeam(state);
        case "COUNT": return addCount(state, action);
        case "RESET": return initialState;
        default: return state;
    };
}



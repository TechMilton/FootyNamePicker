import React, { useState, useReducer } from "react";
import initialState from '../../data/initialState';
import reducer from '../../data/reducer';

const Settings = (props) => {

    const [teamOne, setTeamOne] = useState("");
    const [teamTwo, setTeamTwo] = useState("");

    const [{ }, dispatch] = useReducer(reducer, initialState);

    const handleTeamOne = (e) => {
        setTeamOne(e.target.value);
    };

    const handleTeamTwo = (e) => {
        setTeamTwo(e.target.value);
    };


    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        e.preventDefault();
        setTeamOne("");
        setTeamTwo("");
        dispatch({ type: "TEAM_ONE", value: { teamOne } });
        dispatch({ type: "TEAM_TWO", value: { teamTwo } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter First Team Name:</label>
                <input
                    type="text"
                    onChange={handleTeamOne}
                    value={teamOne}
                >
                </input>

                <label>Enter Second Team Name:</label>
                <input
                    type="text"
                    onChange={handleTeamTwo}
                    value={teamTwo}
                >
                </input>

                <label>How Many people are playing?( 4 - 10)</label>
                <input
                    type="number"
                    placeholder="4"
                    min="4"
                    max="10">
                </input>
                <button>Start</button>
            </form>
        </>
    )

}


export default Settings;
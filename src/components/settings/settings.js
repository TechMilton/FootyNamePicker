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
            <form className="settings-page" onSubmit={handleSubmit}>
                <label className="input-label">First Team Name:</label>
                <input
                    className="settings-input"
                    type="text"
                    onChange={handleTeamOne}
                    value={teamOne}
                >
                </input>

                <label className="input-label">Second Team Name:</label>
                <input
                    className="settings-input"
                    type="text"
                    onChange={handleTeamTwo}
                    value={teamTwo}
                >
                </input>

                <label className="input-label">Number of Players</label>
                <input
                    className="settings-input"
                    type="number"
                    placeholder="4"
                    min="4"
                    max="10">
                </input>
                <button className="main-btn">Start</button>
            </form>
        </>
    )

}


export default Settings;
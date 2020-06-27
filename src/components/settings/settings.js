import React, { useState, useReducer } from "react";
import initialState from '../../store/initialState';
import reducer from '../../store/reducer';

const Settings = () => {

    const [teamOne, setTeamOne] = useState("");
    const [teamTwo, setTeamTwo] = useState("");
    const [count, setCount] = useState(4);

    const [{ }, dispatch] = useReducer(reducer, initialState);

    const handleTeamOne = (e) => {
        setTeamOne(e.target.value);
    };

    const handleTeamTwo = (e) => {
        setTeamTwo(e.target.value);
    };

    const handleCount = (e) => {
        setCount(e.target.value);
    }


    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        e.preventDefault();
        setTeamOne("");
        setTeamTwo("");
        dispatch({ type: "TEAM_ONE", value: { teamOne } });
        dispatch({ type: "TEAM_TWO", value: { teamTwo } });
        dispatch({ type: "COUNT", value: { count } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    onChange={() => setTeamTwo(teamTwo)}
                    value={teamTwo}

                >
                </input>

                <label className="input-label">Number of Players</label>
                <p onChange={handleCount}>{count} Players</p>
                <button onClick={() => setCount(count + 1)} >+</button>
                <button onClick={() => setCount(count - 1)} >-</button>

                <button className="settings-btn">Start</button>
            </form>
        </>
    )

}

export default Settings;
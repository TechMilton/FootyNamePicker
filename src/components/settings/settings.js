import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

const Settings = () => {

    //initialize context (so that you can reach the data)
    const { dispatch } = useContext(AppContext);

    const [teamOne, setTeamOne] = useState("");
    const [teamTwo, setTeamTwo] = useState("");
    const [count, setCount] = useState(4);

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
                    required
                />

                <label className="input-label">Second Team Name:</label>
                <input
                    className="settings-input"
                    type="text"
                    onChange={handleTeamTwo}
                    value={teamTwo}
                />
                <div className="counter">
                    <label className="input-label">Number of Players:</label>
                    <p className="counter-display" onChange={handleCount}>{count} Players</p>
                    <button className="counter-btn" type="button" onClick={() => setCount(count + 1)} >+</button>
                    <button className="counter-btn" type="button" onClick={() => setCount(count - 1)} >-</button>
                </div>
                <label className="input-label">Submit</label>
                <button type="submit" className="settings-btn">Start</button>
            </form>
        </>
    )

}

export default Settings;
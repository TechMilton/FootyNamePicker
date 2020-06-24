import React, { useState, useReducer } from "react";
import initialState from '../../data/initialState';
import reducer from '../../data/reducer';

const Form = () => {

    const [input, setInput] = useState("");

    const [{ names }, dispatch] = useReducer(reducer, initialState);

    const handleInput = (e) => {
        setInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        e.preventDefault();
        setInput("");
        dispatch({ type: "ADD_NAME", value: { input } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="name-input" onChange={handleInput} value={input} required />
                <br />
                <button type="submit">Add</button>
            </form>
        </>
    );

}

export default Form;
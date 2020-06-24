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

            <div>
                {names.length === 0 ? null : (
                    <ul>
                        {names.map((footballer, index) => (
                            <li key={index}>
                                <span>{footballer.name}</span>
                                <button
                                    onClick={() => dispatch({ type: "REMOVE_NAME", index: index })}>
                                    <i class="fa fa-trash-o" style={{ fontSize: 20 }} />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </>
    );

}

export default Form;
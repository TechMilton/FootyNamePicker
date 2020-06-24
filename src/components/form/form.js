import React, { useState, useReducer } from "react";
import initialState from '../../data/initialState';
import reducer from '../../data/reducer';

const Form = () => {
    //keep track of input value
    const [input, setInput] = useState("");
    const [colorInput, setColor] = useState("");

    // use the reducer
    const [{ names }, dispatch] = useReducer(reducer, initialState);

    // update name input state
    const handleInput = (e) => {
        setInput(e.currentTarget.value);
    };

    // update color input state
    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        e.preventDefault();
        setInput("");
        dispatch({ type: "ADD_NAME", value: { input, colorInput } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="name-input" onChange={handleInput} value={input} required />
                <div onChange={handleColor}>
                    <span class="color-blue"><input type="radio" value="blue" name="color" /></span>
                    <span class="color-red"><input type="radio" value="red" name="color" /></span>
                    <span class="color-green"><input type="radio" value="green" name="color" /></span>
                </div>
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
                                    x
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* <button onClick={() => dispatch({ type: "RESET", })}>RESET GAME</button> */}


        </>
    );

}

export default Form;


//style={{ color: footballer.color}}
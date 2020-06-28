import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

const Form = (props) => {

    //initialize context (so that you can reach the data)
    const { state: { count }, dispatch } = useContext(AppContext);
    const { state: { names } } = useContext(AppContext);

    //keep track of input value
    const [input, setInput] = useState("");
    const [colorInput, setColor] = useState("");

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
        // Reset state after submit
        dispatch({ type: "SHUFFLE" });
    };

    if (names.length >= count) {
        return <Button />
    };


    return (
        <>
            <p className="input-label">Players Name:</p>
            <p>After <i style={{ fontWeight: "bold" }}>{count} names</i>, your teams will be randomly be generated</p>
            <form onSubmit={handleSubmit}>
                <input className="name-input" onChange={handleInput} value={input} required />
                <p className="input-label">Players Color:</p>
                <ul className="color-list" onChange={handleColor}>
                    <li className="color-blue">
                        <input className="color-radio" type="radio" value="blue" name="color" required />
                    </li>
                    <li className="color-red" >
                        <input className="color-radio" type="radio" value="red" name="color" required />
                    </li>
                    <li className="color-green">
                        <input className="color-radio" type="radio" value="green" name="color" required />
                    </li>
                    <li className="color-yellow">
                        <input className="color-radio" type="radio" value="yellow" name="color" required />
                    </li>
                    <li className="color-purple">
                        <input className="color-radio" type="radio" value="purple" name="color" required />
                    </li>
                    <li className="color-brown">
                        <input className="color-radio" type="radio" value="brown" name="color" required />
                    </li>
                    <li className="color-orange">
                        <input className="color-radio" type="radio" value="orange" name="color" required />
                    </li>
                    <li className="color-pink">
                        <input className="color-radio" type="radio" value="pink" name="color" required />
                    </li>
                </ul>

                <button className="main-btn" type="submit">Add</button>
            </form>
        </>
    );

}

export default Form;


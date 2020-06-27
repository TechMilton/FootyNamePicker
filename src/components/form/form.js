import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

const Form = (props) => {

    //initialize context (so that you can reach the data)
    const { state: { count }, dispatch } = useContext(AppContext);

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
    };

    return (
        <>
            <p className="input-label">Players Name:</p>
            <p>After <i style={{ fontWeight: "bold" }}>{count} names</i>, your teams will be randomly be generated</p>
            <form onSubmit={handleSubmit}>
                <input className="name-input" onChange={handleInput} value={input} required />
                <p className="input-label">Players Color:</p>
                <ul className="color-list" onChange={handleColor}>
                    <li className="color-blue" name="color" value="blue" />
                    <li className="color-red" name="color" value="red" />
                    <li className="color-green" name="color" value="green" />
                    <li className="color-yellow" name="color" value="yellow" />
                    <li className="color-purple" name="color" value="purple" />
                    <li className="color-brown" name="color" value="brown" />
                    <li className="color-orange" name="color" value="orange" />
                    <li className="color-pink" name="color" value="pink" />
                </ul>

                <button class="main-btn" type="submit">Add</button>
            </form>

        </>
    );

}

export default Form;


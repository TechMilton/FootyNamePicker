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

                <div onChange={handleColor}>
                    <p className="input-label">Players Color:</p>
                    <span class="color-blue" >
                        <input className="radio-input" type="radio" value="blue" name="color" required />
                    </span>
                    <span class="color-red">
                        <input className="radio-input" type="radio" value="red" name="color" required />
                    </span>
                    <span class="color-green">
                        <input className="radio-input" type="radio" value="green" name="color" required />
                    </span>
                    <span class="color-yellow">
                        <input className="radio-input" type="radio" value="yellow" name="color" required />
                    </span>
                    <span class="color-purple">
                        <input className="radio-input" type="radio" value="purple" name="color" required />
                    </span>
                    <span class="color-brown">
                        <input className="radio-input" type="radio" value="brown" name="color" required />
                    </span>
                    <span class="color-orange">
                        <input className="radio-input" type="radio" value="orange" name="color" required />
                    </span>
                    <span class="color-pink">
                        <input className="radio-input" type="radio" value="pink" name="color" required />
                    </span>
                </div>

                <button class="main-btn" type="submit">Add</button>
            </form>

            {/* Split into Reset Compontent */}
            {/* <button onClick={() => dispatch({ type: "RESET", })}>RESET GAME</button> */}
            {/* style={{ color: footballer.color}} */}
        </>
    );

}

export default Form;


import React, { useContext } from "react";
import { AppContext } from "../../App";

const Reset = () => {
    const { state: dispatch } = useContext(AppContext);

    return (
        <a href="/" onClick={() => dispatch({ type: "RESET", })}>Reset Game</a>
    );
}

export default Reset;
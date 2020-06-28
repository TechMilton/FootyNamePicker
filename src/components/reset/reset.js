import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from 'react-router-dom';


const Reset = () => {
    const { state: reset, dispatch } = useContext(AppContext);

    return (
        <Link
            className="nav-links"
            to="/"
            onClick={() => dispatch({ type: "RESET", })}>
            Reset Game
        </Link>
    );
}

export default Reset;



import React from "react";
import { useHistory } from 'react-router-dom';


const Button = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        //prevents the page from refreshing on submit
        history.push("/teams");
    };

    return (
        <button onClick={handleSubmit}>Generate Teams</button>
    )
}

export default Button;
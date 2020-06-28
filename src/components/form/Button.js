import React from "react";
import { useHistory } from 'react-router-dom';

const Button = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        //redirects user to /teams page
        history.push("/teams");
    };

    return (
        <>
            <div className="btn-teams">
                <p className="input-label">Generate Teams</p>
                <button className="main-btn" onClick={handleSubmit}>Generate Teams</button>
            </div>
        </>
    )
}

export default Button;
import React from "react";

const Settings = (props) => {

    return (
        <>
            <input
                onChange={(e) => props.onChange(e.target.value)}
                type="text"
                required>
            </input>
        </>
    )
}

export default Settings;
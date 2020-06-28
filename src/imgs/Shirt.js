import React from "react";

const SVG = ({
    style = {},
    fill = "#000",
    width = "",
    className = "",
    viewBox = "0 0 32 32"
}) => (
        <svg style={{ margin: "auto", width: 30, height: 30, }}>
            <path
                fill={fill}
                d="M14.43,3l-.29.49a2.5,2.5,0,0,1-4.29,0L9.57,3H6.76L2,5.38V11H6V21H18V11h4V5.38L17.24,3Z"
            />
        </svg>
    );

export default SVG;

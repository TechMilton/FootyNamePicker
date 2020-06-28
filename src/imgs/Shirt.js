import React from "react";

const SVG = ({
    fill = "#000",
    width = 150,
    height = 150,
}) => {
    return (
        <>
            <svg className="footballer-shirt" id="Layer_1" fill={fill} enable-background="new 0 0 512 512" height={height} viewBox="0 0 512 512" width={width} xmlns="http://www.w3.org/2000/svg"><g><path d="m49.097 129.396h60.636v-125.373l-60.636 60.637z" />
                <path d="m139.733 512h101.267v-93.84h30v93.84h101.267v-187.681h-232.534z" />

                <path d="m256 58.779c19.204 0 34.827-15.624 34.827-34.828v-23.951h-69.655v23.952c0 19.204 15.624 34.827 34.828 34.827z" />

                <path d="m402.267 4.023v125.373h60.636v-64.736z" />

                <path d="m320.827 23.952c0 35.746-29.081 64.828-64.827 64.828s-64.828-29.082-64.828-64.828v-23.952h-51.439v294.319h232.533v-294.319h-51.439zm17.872 138.208h-48.288v-30h48.288z" />
            </g>
            </svg>
        </>
    )
};

export default SVG;


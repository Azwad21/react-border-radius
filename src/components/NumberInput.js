import React from 'react';
import PropTypes from "prop-types";

const NumberInput = (props) => {
    return (
        <div className="numberInput">
            <input 
                className="compoundInput"
                type="number"
                value={props.value}
                min={props.min}
                max={props.max}
            />
        </div>
    )
}

NumberInput.propTypes = {
    value: PropTypes.number
}

export default NumberInput

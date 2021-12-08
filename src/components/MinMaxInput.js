import React from 'react';

const MinMaxInput = (props) => {
    return (
        <div className="inputDivs">
            <button onClick={() => props.setMaxValue((e) => e++)}>+</button>
            <button onClick={() => props.setMinValue((e) => e--)}>-</button>
            <input 
                type="number"
                className="compoundInput"
                value={props.min}
                onChange={(e) => props.setMinValue(e.target.value)}
            />
            <input 
                type="number" 
                className="compoundInput" 
                value={props.max}
                onChange={(e) => props.setMaxValue(e.target.value)}
            />
        </div>
    )
}

export default MinMaxInput

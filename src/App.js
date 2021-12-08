import React from 'react';
import Slider from "./components/Slider";
import MinMaxInput from "./components/MinMaxInput";

const App = () => {
    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(50);
    const [value, setValue] = React.useState(5);
    const [topLeftValue, setTopLeftValue] = React.useState(5);
    const [topRightValue, setTopRightValue] = React.useState(5);
    const [bottomRightValue, setBottomRightValue] = React.useState(5);
    const [bottomLeftValue, setBottomLeftValue] = React.useState(5);
    const [linked, setLinked] = React.useState(true);

    const handleLink = () => {
        setLinked(e => !e);
        setValue(value)
        setTopLeftValue(value)
        setTopRightValue(value)
        setBottomRightValue(value)
        setBottomLeftValue(value)
    }

    const handleBorderRadiusChange = (e) => {
        setValue(e[0])
    }
    
    const handleTopLeftBorderRadius = (e) => {
        setTopLeftValue(e[0])
    }
    const handleTopRightBorderRadius = (e) => {
        setTopRightValue(e[0])
    }
    const handleBottomRightBorderRadius = (e) => {
        setBottomRightValue(e[0])
    }
    const handleBottomLeftBorderRadius = (e) => {
        setBottomLeftValue(e[0])
    }

    return (
        <div>
            <div className="borderRadiusDiv">
                <div style={{
                    display: "inline-grid",
                    gridTemplateColumns: "auto auto"
                }}>
                    <div 
                        className="displayer"
                        style={{
                            borderRadius: linked ? `${value}px` : `${topLeftValue}px ${topRightValue}px ${bottomRightValue}px ${bottomLeftValue}px`
                        }}
                    ></div>
                    <button style={{
                        border: "2px solid #eee",
                        background: "#fff",
                        fontSize: "22px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} onClick={handleLink}>Link</button>
                </div>
                <Slider disabled={!linked} min={minValue} max={maxValue} value={value} label="Border Radius" onChange={handleBorderRadiusChange}/>
                <Slider 
                    disabled={linked}
                    min={minValue}
                    max={maxValue}
                    value={value}
                    label="Top - Left - Radius"
                    onChange={handleTopLeftBorderRadius}
                />
                <Slider 
                    disabled={linked}
                    min={minValue}
                    max={maxValue}
                    value={value}
                    label="Top - Right - Radius"
                    onChange={handleTopRightBorderRadius}
                />
                <Slider 
                    disabled={linked}
                    min={minValue}
                    max={maxValue}
                    value={value}
                    label="Bottom - Right - Radius"
                    onChange={handleBottomRightBorderRadius}
                />
                <Slider 
                    disabled={linked}
                    min={minValue}
                    max={maxValue}
                    value={value}
                    label="Bottom - Left - Radius"
                    onChange={handleBottomLeftBorderRadius}
                />
            </div>
        </div>
    )
}

export default App

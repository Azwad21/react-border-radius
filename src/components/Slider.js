import React from 'react';
import {
    Slider as CompoundSlider,
    Handles as CompoundHandles,
    Tracks as CompoundTracks,
    Rail as CompoundRail
} from "react-compound-slider";

const Handle = ({
    handle: { id, value, percent },
    getHandleProps
}) => {

    return (
        <div className="slider-handle-styles" style={{left: `${percent}%`}} {...getHandleProps(id)}>
            {value}
        </div>
    )
}

const Track = ({ source, target, getTrackProps }) => {

    return <div 
        style={{
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
        }}
        className="slider-track-styles" 
        {...getTrackProps()} 
    />
}

const Slider = React.memo((props) => {

    return (
        <div className={`slider ${props.disabled ? "disabled" : ""}`}>
            <div className="slider-label">{props.label}</div>
            <CompoundSlider
                className={`slider-styles`}
                domain={[props.min, props.max]}
                step={1}
                mode={2}
                values={[props.value]}
                disabled={props.disabled}
                onUpdate={props.onChange}
            >
                <CompoundRail>
                    {({ getRailProps }) => (
                        <div className="slider-rail-styles" {...getRailProps()} />
                    )}
                </CompoundRail>
                <CompoundHandles>
                    {({ handles, getHandleProps }) => (
                        <>
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </>
                    )}
                </CompoundHandles>
                <CompoundTracks right={false}>
                    {({ tracks, getTrackProps }) => (
                        <>
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </>
                    )}
                </CompoundTracks>
            </CompoundSlider>
        </div>
    )
});

export default Slider

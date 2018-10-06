import React from 'react';

const PreviousButton = props => {
    return (
        <div classname="button-previous" onClick={props.onClick}>
            <h3>&#x21E6; Previous</h3>
        </div>
    )
}

export default PreviousButton;
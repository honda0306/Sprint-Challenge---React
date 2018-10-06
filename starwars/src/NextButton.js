import React from 'react';

const NextButton = props => {
    return (
        <div className="button-next" onClick={props.onClick}>
            <h3>Next &#x21E8;</h3>
        </div>
    )
}

export default NextButton;
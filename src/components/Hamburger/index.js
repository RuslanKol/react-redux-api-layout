import React from 'react';

const Hamburger = props => {
    return (
        <div className={"hamburger" + (props.isActive ? ' open' : '')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default Hamburger;
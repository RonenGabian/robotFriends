import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'auto', border: '5px solid black', heigth: '500px'}}>
            {props.children}
        </div>
        );
};

export default Scroll;
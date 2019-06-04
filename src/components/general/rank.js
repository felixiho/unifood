import React from 'react';

const rank = (props) => {
    return (
        <div style={style}>
            {props.rank}
        </div>
    );
};

const style = {
    backgroundColor: '#28483d',
    borderRadius: '100px',
    width: 'fit-content',
    padding: '10px',
    color: 'white',
    display: 'inline',
    float: 'right'
};

export default rank;
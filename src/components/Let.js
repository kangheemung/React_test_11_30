import React from 'react';

const age = 16;

const Component = () => { 
    return (
        <>
            {age > 10 ? <div>Pedro</div> : <div>Jack</div>}
        </>
    );
};

export default Component;

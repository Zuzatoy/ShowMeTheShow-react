import React from 'react';

const MainButton = (props) => (
    <div>
        <button
            type="button"
            onClick={() => props.goTo('signIn')} // onClick call an anonymus function which calls goTo function with binded argument
        >
            Sign In
        </button>
        <button
            type="button"
            onClick={() => props.goTo('signUp')}
        >
            Sign Up
        </button>
    </div>
);

export default MainButton;
import React from 'react';


const SignIn = (props) => {
    return (
<div>
    <form>
        <label> 
            Name
            <input type="text" name="name" />
        </label>
        <label> 
            Email
            <input type="text" name="name" />
        </label>
        <label> 
            Password
            <input type="text" name="name" />
        </label>
        <button
            type="button"
            onClick={() => props.goTo('mainPage')} // onClick call an anonymus function which calls goTo function 
            //with binded argument
        >
            Sign In
        </button>
    </form>
</div>

    );
  }
  


    export default SignIn;
import React, { Component } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import MainButton from './MainButton';
import MainPage from './MainPage';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
           /* successfullRegistration: {
                name: ''
            } */
        }

        this.goTo = this.goTo.bind(this); // bind Main class 'this' to the method
    }

    goTo(location) {
        this.setState({ location });
    }

    display(location) {
        switch(location) {
            case '':
            default:
                return <MainButton goTo={this.goTo} />;
            case 'signUp':
                return <SignUp />;
            case 'signIn':
                return <SignIn goTo={this.goTo} />;
            case 'mainPage':
                return <MainPage />;
        }
    }

    render() {
        // const shouldDisplayButtons = this.state.location === '';

        return (
            <div>
                {this.display(this.state.location)}
                {/* {shouldDisplayButtons && <MainButton onButtonClick={this.goTo} />} */}
            </div>
        );           
    }
}

export default Main;
import React, { Component } from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.lisa,
            inputValue: '',
        }
        this.updateText = this.updateText.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateText() {
        this.setState({
            text: this.state.inputValue,
        });
    }

    updateInputValue(event) {
        const value = event.target.value;

        this.setState({
            inputValue: value,
        })
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.lisa}</h3>
                <h1>{this.state.text}</h1>
                <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} />
                <button type="button" onClick={this.updateText}>Run</button>
            </div>
        )
    }
}

export default Intro;

import React, { Component } from 'react'
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <div className='button' onClick={() => this.props.handleOnClick()}>
                {this.props.buttonText}
            </div>
        )
    }
}

export default Button

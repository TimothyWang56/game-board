import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                {this.props.options.map((option, i) => (
                    <div
                        className={'navbar-option ' + (this.props.selected === i ? 'active' : '')}
                        key={i}
                        onClick={() => this.props.handleNavbarClick(i)}>
                        {option}
                    </div>
                ))}
            </div>
        )
    }
}

export default Navbar

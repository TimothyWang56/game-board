import React, { Component } from 'react';
import './Dropdown.scss';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    toggleDropdown() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div className='dropdown-wrapper'>
                <div className='dropdown-top' onClick={this.toggleDropdown.bind(this)}>
                    {this.props.options.length === 0 ?
                        this.props.defaultText :
                        this.props.options[this.props.selected].name || this.props.options[this.props.selected]}
                </div>
                {this.state.open && (
                    <div className='dropdown-options'>
                        {this.props.options.map((option, i) => (
                            <div className={'option ' + (i === this.props.selected ? 'active' : '')}
                                 key={i}
                                 onClick={() => {
                                     this.props.handleOptionSelect(i);
                                     this.toggleDropdown();
                                 }}>
                                {option.name || option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default Dropdown

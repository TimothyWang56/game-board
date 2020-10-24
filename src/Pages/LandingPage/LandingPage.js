import React, { Component } from 'react';
import './LandingPage.scss';
import dice from '../../Assets/Images/dice.svg';

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page'>
                <div className='landing-page-banner'>
                    <img src={dice} alt='dice-svg'/>
                    <div>
                        <div className='game-board-title'>Game Board</div>
                        <div className='game-board-description'>a board game dashboard for everyone!</div>
                    </div>
                    <img src={dice} alt='dice-svg'/>
                </div>
            </div>
        )
    }
}

export default LandingPage
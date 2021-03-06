import React, { Component } from 'react';
import './LandingPage.scss';
import BulletList from '../../Components/BulletList/BulletList';
import Button from '../../Components/Button/Button';
import dice from '../../Assets/Images/dice.svg';

const landingPageBullets1 = [
    'Create board game leagues with my friends',
    'Schedule or plan a board game party',
    'Keep track of game stats in leagues',
    'Chat with my friends in a league'
]

const landingPageBullets2 = [
    'Anyone! Whether you’re a casual board game player or a long-time board game addict, Game Board is meant to be a tool help you discover new games, plan with your friends, and have fun!'
]

class LandingPage extends Component {
    handleLogInClick() {
        this.props.history.push('/login');
    }

    handleRegisterClick() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className='page'>
                <div className='landing-page-banner'>
                    <img src={dice} alt='dice-svg'/>
                    <div>
                        <div className='big-title'>Game Board</div>
                        <div className='game-board-description title'>a board game dashboard for everyone!</div>
                    </div>
                    <img src={dice} alt='dice-svg'/>
                </div>
                <div className='landing-page-text title'>
                    <div className='landing-page-text-1'>
                        What can I do with Game Board?
                        <div className='landing-page-bullets text'>
                            <BulletList className='landing-page-bullets' bullets={landingPageBullets1}/>
                        </div>
                    </div>
                    <div className='landing-page-text-2'>
                        Who can use it?
                        <div className='landing-page-bullets text'>
                            <BulletList className='landing-page-bullets' bullets={landingPageBullets2}/>
                        </div>
                    </div>
                </div>
                <div className='landing-page-buttons'>
                    <div className='landing-page-button small-text'>
                        <Button buttonText='Register' handleOnClick={this.handleRegisterClick.bind(this)}/>
                    </div>
                    <div className='landing-page-button small-text'>
                        <Button buttonText='Log In' handleOnClick={this.handleLogInClick.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
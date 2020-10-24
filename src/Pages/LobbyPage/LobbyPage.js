import React, { Component } from 'react';
import './LobbyPage.scss';
import Button from '../../Components/Button/Button';

class LobbyPage extends Component {
    handleGoToLeaguesClick() {
        console.log('Go to leagues clicked!');
    }

    render() {
        return (
            <div className='page'>
                <div className='lobby-header'>
                    <div className='title'>Lobby Forum</div>
                    <div className='go-to-leagues-button button-text'>
                        <Button buttonText='Go To Your Leagues >' handleOnClick={this.handleGoToLeaguesClick.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LobbyPage

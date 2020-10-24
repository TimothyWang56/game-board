import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import './LeaguesPage.scss';

class LeaguesPage extends Component {
    handleGoToLobbyClick() {
        this.props.history.push('/lobby');
    }

    handleCreateLeagueClick() {
        console.log('create league!');
    }

    render() {
        return (
            <div className='page'>
                <div className='header'>
                    <div className='go-to-lobby-button small-text'>
                        <Button buttonText='< Go Back to Lobby' handleOnClick={this.handleGoToLobbyClick.bind(this)}/>
                    </div>
                    <div className='create-league-button small-text'>
                        <Button buttonText='+ Create League' handleOnClick={this.handleCreateLeagueClick}/>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default LeaguesPage

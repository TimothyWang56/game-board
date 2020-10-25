import React, { Component } from 'react';
import './Games.scss';
import { connect } from 'react-redux';
import crown from '../../Assets/Images/crown.png';
import Button from '../Button/Button';

class Game extends Component {
    render() {
        return (
            <div className={'game ' + (this.props.winner ? (this.props.winner === this.props.currUser ? 'won' : 'lost') : '')}>
                <div>
                    {this.props.date}, {this.props.time}
                </div>
                <div>
                    {this.props.players.join(', ')}
                </div>
                <div>
                    {this.props.winner && [
                        <img src={crown} alt='crown'/>,
                        this.props.winner
                    ]}
                </div>
            </div>
        )
    }
}

class Games extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createGame: false,
            logGame: false,
        }
    }

    toggleScheduleGame() {
        this.setState({
            createGame: !this.state.createGame
        })
    }

    toggleLogGame() {
        this.setState({
            logGame: !this.state.logGame
        })
    }

    render() {
        const leagueName = this.props.leagues[this.props.selectedLeague].name;
        const upcomingGames = this.props.leagueGames[leagueName].upcomingGames;
        const pastGames = this.props.leagueGames[leagueName].pastGames;
        return (
            <div className='games-content small-text'>
                <div className='games-bar'>
                    <div>
                        Upcoming:
                    </div>
                    <div className='game-button'>
                        <Button buttonText={this.state.createGame ? '- Schedule Game' : '+ Schedule Game'} handleOnClick={this.toggleScheduleGame.bind(this)}/>
                    </div>
                </div>
                {this.state.createGame &&
                    <div>Create a game</div>
                }
                {upcomingGames.length !== 0 ?
                    upcomingGames.map((game, i) => (
                        <Game
                            date={game.date}
                            time={game.time}
                            players={game.players}
                            key={i}/>
                    )) : <div>None</div>
                }
                <div className='games-bar'>
                    <div>
                        Recent:
                    </div>
                    <div className='game-button'>
                        <Button buttonText={this.state.logGame ? '- Log Game' : '+ Log Game'} handleOnClick={this.toggleLogGame.bind(this)}/>
                    </div>
                </div>
                {this.state.logGame &&
                    <div>Log a game</div>
                }
                {pastGames.length !== 0 ?
                    pastGames.map((game, i) => (
                        <Game
                            date={game.date}
                            time={game.time}
                            players={game.players}
                            winner={game.winner}
                            currUser={this.props.name}
                            key={i}/>
                    )) : <div>None</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.leagues,
        ...state.user
    }
}

export default connect(mapStateToProps)(Games)
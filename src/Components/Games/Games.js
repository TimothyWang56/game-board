import React, { Component } from 'react';
import './Games.scss';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import moment from 'moment';
import { deleteGame, editGame } from '../../actions/leagueActions';
import Game from '../Game/Game';

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
        const games = this.props.leagueGames[leagueName];
        const upcomingGames = games.filter(game => {
            return moment().isBefore(moment(game.time))
        })
        const pastGames = games.filter(game => {
            return moment().isAfter(moment(game.time))
        })
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
                            time={game.time}
                            players={game.players}
                            index={i}
                            key={i}
                            onGameDelete={this.props.onGameDelete}
                            onGameEdit={this.props.onGameEdit}
                        />
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
                            time={game.time}
                            players={game.players}
                            winner={game.winner}
                            currUser={this.props.name}
                            index={i + upcomingGames.length}
                            key={i}
                            onGameDelete={this.props.onGameDelete}
                            onGameEdit={this.props.onGameEdit}
                        />
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

const mapDispatchToProps = (dispatch) => {
    return {
        onGameDelete: (index) => {
            dispatch(deleteGame(index));
        },
        onGameEdit: (index, game) => {
            dispatch(editGame(index, game));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
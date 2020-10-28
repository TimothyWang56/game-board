import React, { Component } from 'react';
import './Games.scss';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import moment from 'moment';
import { deleteGame, editGame, addGame } from '../../actions/leagueActions';
import Game from '../Game/Game';
import GameInput from '../GameInput/GameInput';

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

    onGameCreate(game) {
        this.props.onGameCreate(game);
        this.setState({
            createGame: false,
            logGame: false,
        })
    }

    render() {
        const leagueId = this.props.myLeagues[this.props.selectedLeague];
        const games = this.props.leagueGames[leagueId];
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
                    <GameInput future={true} onGameCreate={this.onGameCreate.bind(this)} players={this.props.leagueInfo[leagueId].members.map(userId => this.props.userData[userId])}/>
                }
                {upcomingGames.length !== 0 ?
                    upcomingGames.map((game, i) => {
                        const players = game.players.map(userId => this.props.userData[userId]);
                        return (
                            <Game
                                time={game.time}
                                players={players}
                                index={i}
                                key={i}
                                onGameDelete={this.props.onGameDelete}
                                onGameEdit={this.props.onGameEdit}
                            />
                        )
                    }) : <div>None</div>
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
                    <GameInput future={false} onGameCreate={this.onGameCreate.bind(this)} players={this.props.leagueInfo[leagueId].members.map(userId => this.props.userData[userId])}/>
                }
                {pastGames.length !== 0 ?
                    pastGames.map((game, i) => {
                        const winner = this.props.userData[game.winner];
                        const players = game.players.map(userId => this.props.userData[userId]);
                        return (
                            <Game
                                time={game.time}
                                players={players}
                                winner={winner}
                                currUser={this.props.userData[this.props.userId]}
                                index={i + upcomingGames.length}
                                key={i}
                                onGameDelete={this.props.onGameDelete}
                                onGameEdit={this.props.onGameEdit}
                            />
                        )
                    }) : <div>None</div>
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
        },
        onGameCreate: (game) => {
            dispatch(addGame(game));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
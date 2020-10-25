import React, { Component } from 'react';
import './Games.scss';
import { connect } from 'react-redux';
import crown from '../../Assets/Images/crown.png';
import Button from '../Button/Button';
import moment from 'moment';
import Dropdown from '../Dropdown/Dropdown';
import { deleteGame, editGame } from '../../actions/leagueActions';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            whoWon: false,
            selected: 0,
        }
    }

    formatDate(time) {
        const timeAsMoment = moment(time);
        return (timeAsMoment.month() + 1)  + '/' + (timeAsMoment.date())
    }

    formatTime(time) {
        const timeAsMoment = moment(time);
        return timeAsMoment.format('hh:mm a')
    }

    handleWhoWonClick() {
        this.setState({
            whoWon: !this.state.whoWon
        })
    }

    handleWhoWonDropdownClick(index) {
        this.setState({
            selected: index
        })
    }

    handleConfirmWinnerClick() {
        this.props.onGameEdit(this.props.index, {
            time: this.props.time,
            players: this.props.players,
            winner: this.props.players[this.state.selected]
        });
        this.setState({
            whoWon: false
        })
    }

    handleDeleteButtonClick() {
        this.props.onGameDelete(this.props.index)
        this.setState({
            whoWon: false
        })
    }

    renderWinnerOrLog(time, winner) {
        if (moment(time).isBefore(moment())) {
            if (winner) {
                return (
                    <div>
                        <img src={crown} alt='crown'/>
                        {winner}
                    </div>
                )
            } else {
                return (
                    <div className='who-won-text' onClick={this.handleWhoWonClick.bind(this)}>
                        Who won?
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div>
                <div className={'game ' + (this.props.winner ? (this.props.winner === this.props.currUser ? 'won' : 'lost') : '')}>
                    <div>
                        {this.formatDate(this.props.time)}
                    </div>
                    <div>
                        {this.formatTime(this.props.time)}
                    </div>
                    <div>
                        {this.props.players.join(', ')}
                    </div>
                    <div>
                        {this.renderWinnerOrLog(this.props.time, this.props.winner)}
                    </div>
                </div>
                {this.state.whoWon &&
                    <div className='who-won-bar'>
                        <div className='who-won-dropdown'>
                            <Dropdown
                                selected={this.state.selected}
                                options={this.props.players}
                                handleOptionSelect={this.handleWhoWonDropdownClick.bind(this)}
                            />
                        </div>
                        <div className='who-won-confirm-button'>
                            <Button buttonText='Confirm Winner' handleOnClick={() => this.handleConfirmWinnerClick()}/>
                        </div>
                        <div className='who-won-delete-button'>
                            <Button buttonText='Delete Game' handleOnClick={() => this.handleDeleteButtonClick()}/>
                        </div>
                    </div>
                }
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
import React, { Component } from 'react';
import './Game.scss';
import crown from '../../Assets/Images/crown.png';
import Button from '../Button/Button';
import moment from 'moment';
import Dropdown from '../Dropdown/Dropdown';

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

export default Game
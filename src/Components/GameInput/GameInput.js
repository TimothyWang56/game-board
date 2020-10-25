import React, { Component } from 'react';
import './GameInput.scss';
import moment from 'moment';
import Button from '../Button/Button';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const minutes = [':00', ':15', ':30', ':45'];
const periods = ['AM', 'PM'];

const days31 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

const days30 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]

const days28 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28
]


const days29 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29
]


class GameInput extends Component {
    constructor(props) {
        super(props);

        const now = moment();

        this.state = {
            selectedMonth: now.month() + 1,
            selectedDay: now.date(),
            selectedYear: now.year(),
            selectedHour: now.hour() % 12,
            selectedMinutes: minutes[0],
            selectedPeriod: now.format('a').toUpperCase(),
            days: {
                1: days31,
                2: days28,
                3: days31,
                4: days30,
                5: days31,
                6: days30,
                7: days31,
                8: days31,
                9: days30,
                10: days31,
                11: days30,
                12: days31
            },
            years: [now.year() - 1, now.year(), now.year() + 1],
        }
    }

    updateDaysInYear() {
        let leapYear = false;
        if (this.state.selectedYear % 4 === 0) {
            if (this.state.selectedYear % 100 === 0) {
                if (this.state.selectedYear % 400 === 0) {
                    leapYear = true;
                }
            } else {
                leapYear = true;
            }
        }

        const newDays = {...this.state.days};
        if (leapYear) {
            newDays[2] = days29;
        } else {
            newDays[2] = days28;
        }

        this.setState({
            days: newDays
        })
    }

    handleConfirmClick() {
        const comparator = (this.props.future ? 
            (time1, time2) => {
                if (time1 < time2) {
                    return 1;
                } else if (time1 === time2) {
                    return 0;
                } else {
                    return -1;
                }
            } :
            (time1, time2) => {
                if (time1 > time2) {
                    return 1;
                } else if (time1 === time2) {
                    return 0;
                } else {
                    return -1;
                }
            }
        )
        const now = moment();
        const hour = parseInt(this.state.selectedHour) + (this.state.selectedPeriod === 'AM' ? 0 : 12);
        const minute = parseInt(this.state.selectedMinutes.substring(1));

        const compareYear = comparator(now.year(), this.state.selectedYear)
        const compareMonth = comparator(now.month() + 1, this.state.selectedMonth)
        const compareDay = comparator(now.date(), this.state.selectedDay)
        const compareHour = comparator(now.hour(), hour)
        const compareMinute = comparator(now.minutes(), minute)
        
        let valid = true;
        if (compareYear === -1) {
            valid = false;
        } else if (compareYear === 0) {
            if (compareMonth === -1) {
                valid = false;
            } else if (compareMonth === 0) {
                if (compareDay === -1) {
                    valid = false;
                } else if (compareDay === 0) {
                    if (compareHour === -1) {
                        valid = false;
                    } else if (compareHour === 0) {
                        if (compareMinute === -1) {
                            valid = false;
                        }
                    }
                }
            }
        }

        if (valid) {
            const time = new Date(this.state.selectedYear, this.state.selectedMonth - 1, this.state.selectedDay, hour, minute);
            this.props.onGameCreate({
                time: time.toISOString(),
                players: this.props.players,
            })
        }
    }

    render() {
        return (
            <div className='game-input small-text'>
                <div className='game-input-selections'>
                    <label>
                        Year:
                        <div className='game-input-select'>
                            <select value={this.state.selectedYear} onChange={(event) => this.setState({selectedYear: event.target.value})}>
                                {this.state.years.map((year, i) => (
                                    <option value={year} key={i}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label>
                        Month:
                        <div className='game-input-select'>
                            <select value={this.state.selectedMonth} onChange={(event) => this.setState({selectedMonth: event.target.value})}>
                                {months.map((month, i) => (
                                    <option value={month} key={i}>{month}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label>
                        Day:
                        <div className='game-input-select'>
                            <select value={this.state.selectedDay} onChange={(event) => this.setState({selectedDay: event.target.value})}>
                                {this.state.days[this.state.selectedMonth].map((day, i) => (
                                    <option value={day} key={i}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label>
                        Time:
                        <div className='game-input-select'>
                            <select value={this.state.selectedHour} onChange={(event) => this.setState({selectedHour: event.target.value})}>
                                {hours.map((hour, i) => (
                                    <option value={hour} key={i}>{hour}</option>
                                ))}
                            </select>
                            <select value={this.state.selectedMinutes} onChange={(event) => this.setState({selectedMinutes: event.target.value})}>
                                {minutes.map((minute, i) => (
                                    <option value={minute} key={i}>{minute}</option>
                                ))}
                            </select>
                            <select value={this.state.selectedPeriod} onChange={(event) => this.setState({selectedPeriod: event.target.value})}>
                                {periods.map((period, i) => (
                                    <option value={period} key={i}>{period}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                </div>
                <div className='game-input-confirm-button'>
                    <Button buttonText='Confirm' handleOnClick={this.handleConfirmClick.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default GameInput

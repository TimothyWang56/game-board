import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';
import './LeaguesPage.scss';
import { connect } from 'react-redux';
import { selectLeague } from '../../actions/leagueActions';


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
                    <div className='league-select-dropdown small-text'>
                        <Dropdown
                            selected={this.props.selectedLeague}
                            options={this.props.leagues}
                            handleOptionSelect={this.props.onDropdownClick}/>
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

const mapStateToProps = (state) => {
    return {
        ...state.leagues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onDropdownClick: (index) => {
        dispatch(selectLeague(index))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesPage)

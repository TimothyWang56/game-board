import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';
import './LeaguesPage.scss';
import { connect } from 'react-redux';
import { selectLeague } from '../../actions/leagueActions';
import Navbar from '../../Components/Navbar/Navbar';
import Games from '../../Components/Games/Games';
import Members from '../../Components/Members/Members';
import Stats from '../../Components/Stats/Stats';
import Discussion from '../../Components/Discussion/Discussion';


class LeaguesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            navbarOptions: ['Games', 'Members', 'Stats', 'Discussion']
        }
    }

    handleGoToLobbyClick() {
        this.props.history.push('/lobby');
    }

    handleCreateLeagueClick() {
        console.log('create league!');
    }

    handleNavbarClick(index) {
        this.setState({
            selected: index
        })
    }

    renderContent() {
        switch(this.state.navbarOptions[this.state.selected]) {
            case 'Games':
                return <Games/>
            case 'Members':
                return <Members/>
            case 'Stats':
                return <Stats/>
            case 'Discussion':
                return <Discussion/>
            default:
                return 
        }
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
                            options={this.props.myLeagues.map(leagueId => this.props.leagueInfo[leagueId].name)}
                            handleOptionSelect={this.props.onDropdownClick}/>
                    </div>
                    <div className='create-league-button small-text'>
                        <Button buttonText='+ Create League' handleOnClick={this.handleCreateLeagueClick}/>
                    </div>
                </div>
                <div className='leagues-navbar small-text'>
                    <Navbar selected={this.state.selected} options={this.state.navbarOptions} handleNavbarClick={this.handleNavbarClick.bind(this)}/>
                </div>
                <hr/>
                <div className='leagues-page-content'>
                    {this.renderContent()}
                </div>
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

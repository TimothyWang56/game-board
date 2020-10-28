import React, { Component } from 'react';
import './Members.scss';
import { connect } from 'react-redux';

class Member extends Component {
    render() {
        return (
            <div className='member small-text'>
                <div>
                    {this.props.name}
                </div>
                <div>
                    Likes: {this.props.likes.join(', ')}
                </div>
            </div>
        )
    }
}

class Members extends Component {
    render() {
        return (
            <div>
                {this.props.leagueInfo[this.props.myLeagues[this.props.selectedLeague]].members.map((userId, i) => (
                    <Member
                        name={this.props.userData[userId].username}
                        likes={this.props.userData[userId].likes}
                        key={i}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.leagues
    }
}

export default connect(mapStateToProps)(Members)
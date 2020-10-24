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
                {this.props.leagues[this.props.selectedLeague].members.map((member, i) => (
                    <Member
                        name={member}
                        likes={this.props.playerData[member].likes}
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
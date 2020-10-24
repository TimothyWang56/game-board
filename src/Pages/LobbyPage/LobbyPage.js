import React, { Component } from 'react';
import './LobbyPage.scss';
import Button from '../../Components/Button/Button';
import ForumPost from '../../Components/ForumPost/ForumPost';
import { connect } from 'react-redux';

class LobbyPage extends Component {
    handleGoToLeaguesClick() {
        this.props.history.push('/leagues');
    }

    handleForumPostClick(id) {
        console.log('Forum post ' + id + ' was clicked!');
    }

    render() {
        return (
            <div className='page'>
                <div className='header'>
                    <div className='title'>Lobby Forum</div>
                    <div className='go-to-leagues-button small-text'>
                        <Button buttonText='Go To Your Leagues >' handleOnClick={this.handleGoToLeaguesClick.bind(this)}/>
                    </div>
                </div>
                <hr/>
                {this.props.posts.map(post => {
                    return (
                        <div className='lobby-forum-post' key={post.id}>
                            <ForumPost post={post} handleOnClick={this.handleForumPostClick}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.forum
    }
}

export default connect(mapStateToProps)(LobbyPage)
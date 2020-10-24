import React, { Component } from 'react';
import './ForumPost.scss';

class ForumPost extends Component {
    createLeaguePostText(post) {
        let text = '';
        let sep = '\n';
        text += 'Game: ' + post.game + sep;
        text += 'Players: ' + post.players.length + '/' + post.maxPlayers + sep;
        text += 'Experience: ' + post.experience;

        return text;
    }

    createPost(post) {
        let text = '';
        switch(post.postType) {
            case 'LEAGUE':
                text = this.createLeaguePostText(post);
                break;
            case 'DISCUSSION':
                text = post.body;
                break;
            default:
                break;
        }

        return (
            <div>
                <div className='forum-post-header'>
                    <div className='text'>
                        {post.title}
                    </div>
                    <div className='small-text'>
                        by: {post.by}
                    </div>
                </div>
                <div className='forum-text small-text'>
                    {text}
                </div>
            </div>
            
        )
    }

    render() {
        return (
            <div className='forum-post' onClick={() => this.props.handleOnClick(this.props.post.id)}>
                {this.createPost(this.props.post)}
            </div>
        )
    }
}

export default ForumPost

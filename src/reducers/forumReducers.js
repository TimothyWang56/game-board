import {
    ADD_DISCUSSION_POST,
    ADD_LEAGUE_POST,
    DELETE_FORUM_POST,
} from '../actions/forumActions';

const initState = [
    {
        postType: 'LEAGUE',
        title: 'Starting 16 player league! Join us!',
        game: 'Catan',
        players: ['GyozaCrumb', 'socho', 'corgo', 'another person'],
        maxPlayers: '16',
        experience: 'All',
        by: 'GyozaCrumb',
        id: '1',
    },
    {
        postType: 'LEAGUE',
        title: 'Creating a small league, experienced players only',
        game: 'Scrabble',
        players: ['GyozaCrumb', 'socho'],
        maxPlayers: '4',
        experience: 'Advanced',
        by: 'GyozaCrumb',
        id: '2',
    },
    {
        postType: 'DISCUSSION',
        title: 'New Game Recs',
        body: 'Trying to find a new game to play with some friends. Any recommendations?',
        by: 'GyozaCrumb',
        id: '3',
    }
]

export default function forum(state = initState, action) {
    switch(action.type) {
        case ADD_DISCUSSION_POST || ADD_LEAGUE_POST:
            return [
                ...state,
                action.post
            ]
        case DELETE_FORUM_POST:
            return [...state].filter(post => post.id !== action.id);
        default:
            return state;
    }
}
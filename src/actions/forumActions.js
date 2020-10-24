export const ADD_DISCUSSION_POST = 'ADD_DISCUSSION_POST';
export const ADD_LEAGUE_POST = 'ADD_LEAGUE_POST';
export const DELETE_FORUM_POST = 'DELETE_FORUM_POST';

export function addDiscussionPost(post) {
    return {
        type: ADD_DISCUSSION_POST,
        post,
    }
}

export function addLeaguePost(post) {
    return {
        type: ADD_LEAGUE_POST,
        post,
    }
}

export function deleteForumPost(id) {
    return {
        type: DELETE_FORUM_POST,
        id,
    }
}

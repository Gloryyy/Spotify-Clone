export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQD5HN8Hv35hYQR7gNe6kCUp2UNQw8xgu-WdmKswXR7Ud_WLwqM-Jv0_E2FVxmBSsc1ZNN1WfavT-mvm5DbvgFfExh3-yFmCB1PKcOsY2hzljherpu7ybiEZr9uJeoV5TuoAFNd13hVgSfWVP4bnZiKcS8LQc6g8hTx8wngajcFIA5jo'
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;
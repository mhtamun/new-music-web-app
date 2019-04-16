import {UPDATE, SEARCH} from "../actions/musicAlbums";

export default (state = [], {type, payload}) => {
    switch (type) {
        case UPDATE:
            return payload;
        case SEARCH:
            return payload;
        default:
            return state;
    }
}

import {createStore} from "redux";
import musicAlbumsReducer from "../reducers/musicAlbums";

const store = createStore(
    musicAlbumsReducer,
    {
        musicAlbums: [],
    },
);

export default store;

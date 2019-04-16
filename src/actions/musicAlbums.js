import store from "../lib/redux";

export const search = (key) => {
    const action = {
        type: 'search',
        payload: {
            musicAlbums: [
                {
                    title: "Taylor Swift",
                    artist: "Taylor Swift",
                    url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
                    image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
                    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
                },
            ],
        }
    };

    store.dispatch(action);
};

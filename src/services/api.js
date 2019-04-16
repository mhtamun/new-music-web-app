import { get } from '../lib/request';

const getMusicAlbumsEndpoint = 'http://rallycoding.herokuapp.com/api/music_albums';

export const getMusicAlbums = async () => {

    const response = await get(getMusicAlbumsEndpoint);
    console.log(`${getMusicAlbumsEndpoint}: ${JSON.stringify(response)}`);

    if (response.error) {
        return { success: false, message: response.message };
    }

    return { success: true, data: response };
};

export const UPDATE = 'update';
export const SEARCH = 'search';

export const update = musicAlbums => {
    return {
        type: UPDATE,
        payload: {
            musicAlbums: musicAlbums,
        }
    };
};

function compareObjects(o1, o2) {
    var k = '';
    for (k in o1) if (o1[k] != o2[k]) return false;
    for (k in o2) if (o1[k] != o2[k]) return false;
    return true;
}

function itemExists(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) if (compareObjects(haystack[i], needle)) return true;
    return false;
}

function searchFor(toSearch, objects) {
    var results = [];
    for (var i = 0; i < objects.length; i++) {
        if (objects[i]['title'].toLowerCase().indexOf(toSearch.toLowerCase().trim()) !== -1) {
            if (!itemExists(results, objects[i])) results.push(objects[i]);
        }
    }

    return results;
}

export const search = (toSearch, musicAlbums) => {
    const results = searchFor(toSearch, musicAlbums);
    return {
        type: SEARCH,
        payload: {
            musicAlbums: results
        }
    };
};

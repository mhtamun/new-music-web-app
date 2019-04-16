export default (state = [], {type, payload}) => {
    switch (type) {
        case 'search':
            return payload;
        default:
            return state;
    }
}

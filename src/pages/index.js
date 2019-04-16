import * as React from "react";
import {connect} from "react-redux";
import {update, search} from "../actions/musicAlbums";
import {getMusicAlbums} from "../services/api";

import MainDiv from "../components/shared/MainDiv"
import ContentBorder from "../components/shared/ContentBorder"
import Header from "../components/Header"
import Search from "../components/Search"
import Album from "../components/Album";

class Home extends React.Component {
    localSate = {
        musicAlbums: [],
    };

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        this.onSearch(event.target.value, this.localSate.musicAlbums);

        if (event.target.value.trim() === ''){
            this.onUpdate(this.localSate.musicAlbums);
        }
    }

    onUpdate(musicAlbums) {
        this.props.onUpdate(musicAlbums);
    }

    onSearch(toSearch, musicAlbums) {
        this.props.onSearch(toSearch, musicAlbums);
    }

    render() {

        console.log(this.props);
        const {musicAlbums} = this.props;

        return (
            <div>
                <MainDiv>
                    <ContentBorder>
                        <Header/>
                        <Search onChange={this.onChange}/>
                        {musicAlbums.map(musicAlbum => (
                            <Album
                                key={musicAlbum.id}
                                thumbnail={musicAlbum.thumbnail_image}
                                title={musicAlbum.title}
                                artist={musicAlbum.artist}
                                image={musicAlbum.image}
                            />
                        ))}
                    </ContentBorder>
                </MainDiv>
            </div>
        );
    }

    componentDidMount() {
        getMusicAlbums().then(response => {
            if (response.success) {
                this.localSate.musicAlbums = response.data;
                this.onUpdate(response.data);
            }
        });
    };
}

const mapStateToProps = state => ({
    musicAlbums: state.musicAlbums
});

const mapActionsToProps = {
    onUpdate: update,
    onSearch: search,
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    console.log(propsFromState, propsFromDispatch, ownProps);
    return {};
};

export default connect(mapStateToProps, mapActionsToProps)(Home);

import * as React from "react";
import MainDiv from "../components/shared/MainDiv"
import ContentBorder from "../components/shared/ContentBorder"
import Header from "../components/Header"
import Search from "../components/Search"
import Album from "../components/Album";

import {getMusicAlbums} from "../services/api";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            musicAlbums: [],
        };
    }

    render() {

        const {musicAlbums} = this.state;

        return (
            <div>
                <MainDiv>
                    <ContentBorder>
                        <Header/>
                        <Search/>
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
                this.setState({musicAlbums: response.data});
            }
        });
    };
}

export default Home;

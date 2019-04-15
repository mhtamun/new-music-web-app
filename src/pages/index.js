import * as React from "react";
import MainDiv from "../components/shared/MainDiv"
import ContentBorder from "../components/shared/ContentBorder"
import Header from "../components/Header"
import Search from "../components/Search"
import Album from "../components/Album";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            albums: [
                {
                    title: "Fearless",
                    artist: "Taylor Swift",
                    url: "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
                    image: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
                    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
                },
                {
                    title: "Speak Now",
                    artist: "Taylor Swift",
                    url: "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
                    image: "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
                    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
                },
            ],
        };
    }

    render() {

        const { albums } = this.state;

        return (
            <div>
                <MainDiv>
                    <ContentBorder>
                        <Header/>
                        <Search/>
                        {albums.map(album => (
                            <Album
                                key={album.id}
                                thumbnail={album.thumbnail_image}
                                title={album.title}
                                artist={album.artist}
                                image={album.image}
                            />
                        ))}
                    </ContentBorder>
                </MainDiv>
            </div>
        );
    }
}

export default Home;

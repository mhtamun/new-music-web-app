import * as React from "react";
import styled from "styled-components";

const Border = styled.div`
    display: flex;
    align-items: center;
	height: auto;
	width: 100%;
    border-bottom: 1px solid #DBDBDB;
`;

const Box = styled.div`
    overflow: hidden; 
	height: auto;
	width: 100%;
	margin: 30px;
`;

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
	width: 100%;
	margin-bottom: 10px;
`;

const ThumbnailImage = styled.img`
    height: 100%;
    width: 100px;
    background-color: #D3D3D3;
`;

const TextBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-left: 20px;
    overflow: hidden;
`;

const Title = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    color: #000;
	font-family: Roboto;
	font-size: 30px;
	
	@media (max-width: 320px) {
	    font-size: 20px;
    }
`;

const Artist = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    color: #000;
	font-family: Roboto;
	font-size: 20px;
	
	@media (max-width: 320px) {
	    font-size: 10px;
    }
`;

const Body = styled.img`
    height: auto;
    width: 100%;
    margin-top: 10px;
    background-color: #D3D3D3;
`;

export default (props) => (
    <Border>
        <Box>
            <Header>
                <ThumbnailImage src={props.thumbnail}/>
                <TextBox>
                    <Title>{props.title}</Title>
                    <Artist>{props.artist}</Artist>
                </TextBox>
            </Header>
            <Body src={props.image}/>
        </Box>
    </Border>
);

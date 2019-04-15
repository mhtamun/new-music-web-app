import * as React from "react";
import styled from "styled-components";

const Border = styled.div`
    display: flex;
    flex-flop: row wrap;
    align-items: center;
    justify-content: flex-start;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #DBDBDB;
`;

const Title = styled.div`
    height: auto;
    width: auto;
    padding-left: 30px;
    text-align: center;
    color: #D3D3D3;
	font-family: Roboto;
	font-size: 40px;
	
	@media (max-width: 720px) {
	    font-size: 20px;
    }
	
	@media (max-width: 320px) {
	    font-size: 20px;
    }
`;

export default (props) => (
    <Border>
        <Title>Albums</Title>
    </Border>
);

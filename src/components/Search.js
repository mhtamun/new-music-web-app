import * as React from "react";
import styled from "styled-components";

import TextInput from "./shared/TextInput";

const Border = styled.div`
    display: flex;
    flex-flop: row wrap;
    align-items: center
    justify-content: flex-start;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #DBDBDB;
`;

const Box = styled.div`
    display: flex;
    flex-flop: row wrap;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    margin: 30px;
    background-color: #D3D3D3;
`;

export default (props) => (
    <Border>
        <Box><TextInput hint={'Search'} onChange={props.onChange}/></Box>
    </Border>
);

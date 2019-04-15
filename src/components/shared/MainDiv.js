import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    
    @media (max-height: 320px) {
       height: 100%;
       width: 100%;
    }
`;

export default MainDiv;

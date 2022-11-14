import styled from 'styled-components';
import Header from './Header';

export const StyledHeader = styled(Header)`
    width: 100vw;
    height: 100px;
    background-color: blue;
    color: white;
`;

export const Logo = styled.image`
    height: 70px;
    width: 70px;
    margin: 5px;
    float: left;

    &:hover {
        background-color: black;
    }
`;


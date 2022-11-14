import styled from 'styled-components';
import Header from './Header';

export const StyledHeader = styled(Header)`
    width: 100vw;
    height: 100px;
    background-color: #52ACDF;
    color: white;
    position: sticky;
    top: 0;
`;

export const Logo = styled.img`
    height: 70px;
    width: 70px;
    margin: 15px;
    float: left;

    &::selection {
        background-color: transparent;
    }
`;

export const AppTitle = styled.text`
    color: white;
    height: 70px;
    width: min-content;
    margin: 15px;
    float: left;

    text-align: center;
    font-weight: 700;
    font-size: 50px;

    &::selection {
        background-color: transparent;
    }
`;

export const LoginButton = styled.button`
    color: white;
    height: 70px;
    width: min-content;
    margin: 15px;
    float: right;

    text-align: center;
    font-weight: 700;
    font-size: max-width;

    &::selection {
        background-color: transparent;
    }
`;


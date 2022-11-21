import styled from 'styled-components';
import profile from "../assets/profile.png"

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 125px;
    background-color: transparent;
    color: white;
    position: sticky;
    top: 0;
`;

export const StyledHeader = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #52ACDF;
    color: white;
    position: fixed;
    top: 0;
`;

export const Logo = styled.img`
    height: 50px;
    width: 50px;
    margin: 10px;
    float: left;

    &:hover {
        background-color: transparent;
        cursor: pointer;
    }
`;

export const AppTitle = styled.text`
    color: white;
    height: 50px;
    width: min-content;
    margin: 10px;
    float: left;

    text-align: center;
    font-weight: 700;
    font-size: 40px;

    &:hover {
        background-color: transparent;
        cursor: pointer;
    }
`;

export const LoginButton = styled.button`
    color: white;
    background-color: transparent;
    border-color: transparent;
    height: 50px;
    width: max-content;
    margin: 10px;
    float: right;

    text-align: center;
    font-weight: 400;
    font-size: 20px;

    &:hover {
        background-color: transparent;
        text-decoration: underline;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;

export const ProfileButton = styled.button`
    color: white;
    background-color: transparent;
    background-position: center;
    border-color: transparent;
    height: 45px;
    width: 45px;
    margin: 15px;
    margin-left: 5px;
    margin-right: 1.5%;
    float: right;

    text-align: center;
    font-weight: 400;
    font-size: 20px;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;
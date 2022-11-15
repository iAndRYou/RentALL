import styled from 'styled-components';
import profile from "../assets/profile.png"

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 150px;
    background-color: transparent;
    color: white;
    position: sticky;
    top: 0;
`;

export const StyledHeader = styled.div`
    width: 100vw;
    height: 90px;
    background-color: #52ACDF;
    color: white;
    position: fixed;
    top: 0;
`;

export const Logo = styled.img`
    height: 70px;
    width: 70px;
    margin: 10px;
    float: left;

    &:hover {
        background-color: transparent;
        cursor: pointer;
    }
`;

export const AppTitle = styled.text`
    color: white;
    height: 70px;
    width: min-content;
    margin: 10px;
    float: left;

    text-align: center;
    font-weight: 700;
    font-size: 50px;

    &:hover {
        background-color: transparent;
        cursor: pointer;
    }
`;

export const LoginButton = styled.button`
    color: white;
    background-color: transparent;
    border-color: transparent;
    height: 70px;
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
    height: 60px;
    width: 60px;
    margin: 15px;
    margin-left: 5px;
    margin-right: 2.5%;
    float: right;

    text-align: center;
    font-weight: 400;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
        transform: scale(1.2);
        outline: none !important;
        border: 1px solid white;
        border-radius: 70px;
        box-shadow: none;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;
import styled from 'styled-components';
import LoginPage from './LoginPage';

export const StyledLoginPage = styled(LoginPage)`
    background-color: transparent;
    color: gray;
    min-width: 300px;
    width: 30%;
    margin-left: 35%;
    margin-right: 35%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 1%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    display: inline-block;
`;

export const StyledInput = styled.input`
padding-top: 5px;
    margin-right: 10%;
    margin-left: 10%;
    height: 10%;
    width: 80%;
    outline: none !important;

    background: transparent;
    color: gray;
    text-align: left;
    font-size: 20px;

    border-radius: 0px;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: 2px solid gray;

    &:hover {
        outline: none !important;
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        border-bottom:2px solid #52ACDF;
        box-shadow: none;
    }

    &:focus {
        color: #52ACDF;
        outline: none !important;
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        border-bottom:2px solid #52ACDF;
        box-shadow: none;
    }

    &::placeholder {
        color: gray;
    }
`;

export const StyledLoginButton = styled.button`
    padding: 7px;
    margin-bottom: 10px;
    margin-right: 35%;
    margin-left: 35%;
    width: 30%;
    background-color: transparent;
    border: 2px solid gray;
    outline: 20px white;

    border-radius: 15px;

    color: gray;
    text-align: center;
    font-size: 16px;

    &:hover {
        background-color: #52ACDF;
        color: white;
        border: 2px solid #52ACDF;
        cursor: pointer;
    }
`;

export const StyledFormBreak = styled.br`
    line-height: 20px;
    display: block;
    margin: 20px 0;
    content: " ";
`;
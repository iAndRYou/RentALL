import styled from 'styled-components';
import LoginPage from './LoginPage';

export const StyledLoginPage = styled(LoginPage)`
    background-color: #5c8fe0;
    color: white;
    min-height:70vh;
    width: 22%;
    margin-left: 36%;
    margin-right: 41%;
    margin-top: 1%;
    border-radius: 40px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    display: inline-block;
  
`;

export const StyledInput = styled.input`
    padding: 0px;
    float: right;
    outline: none !important;
    border:2px solid lightgray;
    padding-left: 5px;

    color: gray;
    text-align: left;

    &:hover {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }

    &:focus {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }

    border-radius: 10px;
`;

export const StyledLoginButton = styled.button`
    margin-left: 0px;
    margin-top: 10px;
    padding: 6px;
    background-color: gray;
    border-color: transparent;

    border-radius: 15px;

    color: white;
    text-align: center;
    font-size: 16px;

    &:hover {
        background-color: #52ACDF;
        cursor: pointer;
    }
`;
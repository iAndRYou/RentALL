import styled from 'styled-components';
import AddAdvertPage from './AddAdvertPage';

export const StyledAddAdvertButton = styled.button`
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 3px;
    background-color: gray;
    border-color: transparent;
    border-radius: 50%;

    color: white;
    text-align: center;
    font-size: 80px;

    position: fixed;
    bottom: 10px;

    &:hover {
        background-color: #52ACDF;
        cursor: pointer;
    }
`;

export const StyledInput = styled.input`
    padding-top: 5px;
    margin-left: 20px;
    margin-right: 20%;
    height: 10%;
    width: 80%;
    position: sticky;
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

export const StyledTextArea = styled.textarea`
    padding-top: 5px;
    margin-left: 20px;
    margin-right: 20%;
    height: 70px;
    min-height: 70px;
    width: 80%;
    max-width: 80%;
    min-width: 80%;
    position: sticky;
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

export const StyledAddButton = styled.button`
    padding: 7px;
    margin-bottom: 10px;
    margin-right: 10%;
    width: 30%;
    background-color: transparent;
    border: 2px solid gray;
    outline: 20px white;

    border-radius: 15px;

    color: gray;
    text-align: center;
    font-size: 16px;

    float: left;
    
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

export const StyledAddAdvertPage = styled(AddAdvertPage)`
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


export const StyledImage = styled.img`
    width: 22.5vh;
    height: 22.5vh;
    padding: 15px;
    border-radius: 45px;

    &:hover {
        cursor: default;
    }
`
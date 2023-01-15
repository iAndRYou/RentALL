import styled from 'styled-components';
import ProfilePage from './ProfilePage';

export const StyledProfilePage = styled(ProfilePage)`
    background-color: red;
    color: gray;
   
    background: white;
    min-height:85vh;
    padding-left: 2%;
    padding-right: 2%;  
`;

export const StyledUserAdvert = styled.div`
    min-height: 25vh;
    min-width: 25vh;
    width: 49%;
    background-color: #EEEEEE;
    margin: 1%;
    margin-right: 0%;
    margin-bottom: 0%;
    border-radius: 35px;
    line-height: 0.8;
    font-size: larger;
    color: gray;
    display: inline-block;
    
    &:hover {
        cursor: default;
    }
`;

export const StyledImageProfile= styled.img`
    float: left;
    width: 22.5vh;
    height: 22.5vh;
    padding: 15px;
    border-radius: 45px;

    &:hover {
        cursor: default;
    }
`;

export const StyledEditButton = styled.button`
    color: #52ACDF;
    background-color: transparent;
    border: 2px solid #52ACDF;
    outline: 20px #52ACDF;
    border-radius: 15px;
    padding: 7px;
    margin-bottom: 10px;

    height: max-content;
    width: 70px;

    text-align: center;
    font-weight: 400;
    font-size: 18px;

    &:hover {
        background-color: #52ACDF;
        color: white;
        border: 2px solid #52ACDF;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;

export const StyledDeleteButton = styled.button`
    color: red;
    background-color: transparent;
    border: 2px solid red;
    outline: 20px red;
    border-radius: 15px;
    padding: 7px;
    margin-bottom: 10px;

    height: max-content;
    width: 70px;

    text-align: center;
    font-weight: 400;
    font-size: 18px;

    &:hover {
        background-color: red;
        color: white;
        border: 2px solid red;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;

export const StyledRefreshButton = styled.button`
    color: #52ACDF;
    background-color: transparent;
    border: 2px solid #52ACDF;
    outline: 20px #52ACDF;
    border-radius: 15px;
    padding: 7px;
    margin-bottom: 10px;

    height: max-content;
    width: 70px;

    text-align: center;
    font-weight: 400;
    font-size: 13px;

    &:hover {
        background-color: #52ACDF;
        color: white;
        border: 2px solid #52ACDF;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;
import styled from 'styled-components';
import ProfilePage from './ProfilePage';

export const StyledProfilePage = styled(ProfilePage)`
    background-color: #5c8fe0;
    color: white;
    min-height:70vh;
    width: 70%;
    margin-left: 12%;
    margin-right: 15%;
    margin-top: 1%;
    border-radius: 40px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    display: block;
  
`;

export const StyledUserAdvert = styled.div`
    background-color: gray;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 1%;
    padding: 1%;
    color: black;
    border-radius: 35px;
    display: block;
`;

export const StyledImageProfile= styled.img`
    float: left;
    width: 13.5vh;
    height: 12.5vh;
    padding: 15px;
    border-radius: 35px;

    &:hover {
        cursor: default;
    }
`

export const StyledEditButton = styled.button`
    float: right;
`;

export const StyledDeleteButton = styled.button`
    float: right;
`;
import styled from 'styled-components';

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

export const StyledAddAdvertPage = styled.div`
    background-color: white;
    color: white;
   
    background: white;
    min-height:85vh;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;

`;

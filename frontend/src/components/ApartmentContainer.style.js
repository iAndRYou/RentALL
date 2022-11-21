import styled from 'styled-components';
import ApartmentContainer from './ApartmentContainer';


export const StyledApartmentContainer = styled(ApartmentContainer)`
    min-height: 25vh;
    background-color: #EEEEEE;
    margin-top: 1%;
    border-radius: 35px;
    font-size: larger;
`;

export const ApartmentInfo = styled.div`
    padding-left: 1%;
    display: inline-block;
    width: 30%;
    margin-top: 1.5%;
`;

export const DefText = styled.p`
    display: inline;
    color: #A9A9A9;
`;

export const BetterText = styled.h3`
    display: inline;
    color: ${(props) => props.colour};
`;

export const StyledImage = styled.img`
    float: left;
    display: inline-block;
    width: 22.5vh;
    height: 22.5vh;
    padding: 15px;
    border-radius: 45px;
`

export const StyledExpandableDiv = styled.div`
    margin-top: 40px;
    max-height: ${props => props.isOpen ? "300px" : "0"};
    min-height: ${props => props.isOpen ? "100px" : "0"};
    //padding: ${props => props.isOpen ? "70px 0" : "0"};
    padding-left: 1%;
    overflow: hidden;
    transition: 0.3s;
    transition-timing-function: ease-out;
    //color: red;
`;

export const DetailsButton = styled.button`
    color: #52ACDF;
    background-color: transparent;
    border-color: transparent;
    height: 70px;
    width: max-content;
    padding-left: 1%;

    text-align: center;
    font-weight: 400;
    font-size: 18px;

    &:hover {
        background-color: transparent;
        text-decoration: underline;
        cursor: pointer;
    }

    &::selection {
        background-color: transparent;
    }
`;

export const AdvertButton = styled.button`
    width: 160px;
    height: 36px;
    margin: 10px;

    background-color: white;
    border: 2px solid #52ACDF;
    border-radius: 20px;

    color: #52ACDF;
    text-align: center;
    font-size: 18px;

    float: center;

    &:hover {
        color: white;
        background-color: #52ACDF;
        border-color: transparent;
        cursor: pointer;
    }
`;
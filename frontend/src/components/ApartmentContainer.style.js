import styled from 'styled-components';
import ApartmentContainer from './ApartmentContainer';


export const StyledApartmentContainer = styled(ApartmentContainer)`
    min-height: 25vh;
    background-color: #EEEEEE;
    color: gray;
    margin-top: 1%;
    border-radius: 35px;
    font-size: larger;
    line-height: 1.1;
    display: block;

    &:hover {
        cursor: default;
    }
`;

export const ApartmentInfo = styled.div`
    padding-left: 1%;
    display: inline-block;
    width: 50%;

    &:hover {
        cursor: default;
    }
`;

export const DefText = styled.p`
    display: inline;
    color: #A9A9A9;

    &:hover {
        cursor: default;
    }
`;

export const BetterText = styled.h3`
    display: inline;
    color: ${(props) => props.colour};

    &:hover {
        cursor: default;
    }
`;

export const StyledImage = styled.img`
    float: left;
    width: 22.5vh;
    height: 22.5vh;
    padding: 15px;
    border-radius: 45px;

    &:hover {
        cursor: default;
    }
`

export const StyledExpandableDiv = styled.div`
    margin-top: 0px;
    max-height: ${props => props.isOpen ? "500px" : "0"};
    min-height: ${props => props.isOpen ? "100px" : "0"};
    //padding: ${props => props.isOpen ? "70px 0" : "0"};
    padding-left: 1%;
    overflow: hidden;
    transition: 0.3s;
    transition-timing-function: ease-out;
    //color: red;

    &:hover {
        cursor: default;
    }
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

export const NoResultsPage = styled.div`
    text-align: center;
    margin-top: 10%;
    font-size: 50px;
    color: #A9A9A9;
    height: 100%;
`;

export const ScoreGraph = styled.div`
    width: 12vh;
    height: 12vh;
    border-radius: 6vh;
    background: conic-gradient( 
        ${(props) => props.colour} ${(props) => props.degree}, #EEEEEE 0deg);

    margin: 15px;
    float: right;
`;

export const ScoreFill = styled.div`
    width: 10vh;
    height: 10vh;
    border-radius: 5vh;
    background-color: #EEEEEE;

    margin: 1vh;
    float: right;
`;

export const ScoreText = styled.p`
    color: ${(props) => props.colour};
    margin: 1.5vh;
    margin-top: 2.5vh;

    font-size: 4vh;
    font-weight: 700;
    text-align: center;
`;

export const ContactInfo = styled.div`
    padding-left: 1%;
    display: inline-block;
    margin: 1%;
`;
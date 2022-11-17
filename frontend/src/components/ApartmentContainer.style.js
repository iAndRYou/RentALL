import styled from 'styled-components';
import ApartmentContainer from './ApartmentContainer';


export const StyledApartmentContainer = styled(ApartmentContainer)`
    min-height: 30vh;
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
    width: 15%;
    height: 25vh;
    padding: 15px;
    border-radius: 45px;
`

export const StyledExpandableDiv = styled.div`
    margin-top: 40px;
    max-height: ${props => props.isOpen ? "1000px" : "0"};
    min-height: ${props => props.isOpen ? "100px" : "0"};
    //padding: ${props => props.isOpen ? "70px 0" : "0"};
    padding-left: 40px;
    overflow: hidden;
    transition: 0.3s;
    transition-timing-function: ease-out;
    //color: red;
`;


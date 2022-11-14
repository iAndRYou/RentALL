import styled from 'styled-components';
import ApartmentContainer from './ApartmentContainer';

export const StyledApartmentContainer = styled(ApartmentContainer)`
    height: 30vh;
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
    height: 85%;
    padding: 15px;
    border-radius: 45px;
`
import styled from 'styled-components';
import ApartmentContainer from './ApartmentContainer';

export const StyledApartmentContainer = styled(ApartmentContainer)`
    height: 30vh;
    background-color: #EEEEEE;
    margin: 1%;
    border-radius: 30px;
`;

export const ApartmentInfo = styled.div`
    padding-left: 10vw;
`;

export const DefText = styled.p`
    display: inline-block;
    color: #CDCDCD
;
    
`;

export const BetterText = styled.h3`
    display: inline-block;
    color: ${(props) => props.colour};
`;
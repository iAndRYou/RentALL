import styled from 'styled-components';

export const StyledOptionBar = styled.div`
    width: 100vw;
    height: 50px;
    background-color: transparent;
    color: white;
    position: fixed;
    top: 90px;
    display: flex;
`;

export const StyledPriceTag = styled.div`
    width: 60px;
    height: 30px;
    margin: 10px;
    padding: 3px;
    margin-right: 0px;
    margin-left: 0px;
    background-color: gray;
    background-size: px;
    border-color: transparent;

    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 600;

    &:hover {
        cursor: default;
    }
`;

export const StyledLowerPrice = styled.input`
    width: 60px;
    height: 30px;
    margin: 10px;
    margin-right: 0px;
    background-color: lightgray;
    border-color: transparent;

    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

    color: gray;
    text-align: center;
    font-size: 20px;

    &:focus {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }

`;

export const StyledUpperPrice = styled.input`
    width: 60px;
    height: 30px;
    margin: 10px;
    margin-left: 0px;
    background-color: lightgray;
    border-color: transparent;

    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;

    color: gray;
    text-align: center;
    font-size: 20px;

    &:focus {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }
`;

export const StyledEnterCommute = styled.input`
    width: 240px;
    height: 30px;
    margin: 10px;
    margin-right: 0px;
    padding-left: 14px;
    background-color: lightgray;
    border-color: transparent;

    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

    color: gray;
    text-align: left;
    font-size: 20px;

    &:focus {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }

`;

export const StyledSearchButton = styled.button`
    width: 80px;
    height: 36px;
    margin: 10px;
    margin-left: 0px;
    padding: 3px;
    background-color: gray;
    border-color: transparent;

    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;

    color: white;
    text-align: center;
    font-size: 20px;

    &:hover {
        background-color: #52ACDF;
        cursor: pointer;
    }
`;

export const StyledSortMethod = styled.select`
    width: 240px;
    height: 30px;
    margin: 10px;
    padding-left: 14px;
    background-color: lightgray;
    border-color: transparent;

    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

    color: gray;
    text-align: left;
    font-size: 20px;

    &:focus {
        outline: none !important;
        border:2px solid #52ACDF;
        box-shadow: none;
    }

`;
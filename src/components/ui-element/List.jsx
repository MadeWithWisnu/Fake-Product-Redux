import styled from "styled-components";

export const List = styled.div`
    background-color: white;
    margin-bottom: 30px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    & .name {
        font-size: 18px;
        text-transform: capitalize;
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    & .username span:first-child,
    & .email span:first-child {
        color: #686de0;
        margin-right: 5px; 
    }
`;
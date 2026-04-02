import styled from "styled-components";

export const Grid = styled.div`
    width: 800px;
    margin: 140px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 330px;
    gap: 15px;
`;
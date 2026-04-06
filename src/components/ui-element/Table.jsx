import styled from "styled-components";

export const Table = styled.table`
    width: 800px;
    margin: 140px auto 0 auto;
    border-collapse: collapse;

    th, td {
        padding: 10px 16px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
        font-weight: 600;
    }

    tr:hover td {
        background-color: #f9f9f9;
    }
`;
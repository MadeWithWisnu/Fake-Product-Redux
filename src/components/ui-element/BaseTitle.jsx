import { styled } from "styled-components";

const SyledTitle = styled.h1`
    font-size: 22px;
    color: #2f3640;
    line-height: 1.4;
    font-weight: 700;
`;

export function BaseTitle({ children }) {
    return <SyledTitle>{children}</SyledTitle>
}
import { styled } from "styled-components";

const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #4b6584;
`;

export default function BaseTitle({ children }) {
    return <Title>{children}</Title>
}
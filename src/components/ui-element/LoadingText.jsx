import { styled } from 'styled-components';

const StyledLoadingText = styled.p`
    text-align: center;
    color: #4b6584;
    font-size: 16px;
    margin-top: 20px;
`;

export function LoadingText({ children }) {
    return <StyledLoadingText>{children}</StyledLoadingText>;
}
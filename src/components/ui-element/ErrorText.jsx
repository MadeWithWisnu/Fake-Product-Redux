import { styled } from 'styled-components';

const StyledErrorText = styled.p`
    text-align: center;
    color: #e74c3c;
    font-size: 16px;
    margin-top: 20px;
`;

export function ErrorText({ children }) {
    return <StyledErrorText>{children}</StyledErrorText>;
}
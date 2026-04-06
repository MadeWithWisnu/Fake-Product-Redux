import { styled } from 'styled-components';

const StyledPrice = styled.div`
    font-weight: bold;
    color: #1e90ff;
    font-size: 16px;
    margin-bottom: 12px;
`;

export function Price({ children }) {
    return <StyledPrice>{children}</StyledPrice>;
}
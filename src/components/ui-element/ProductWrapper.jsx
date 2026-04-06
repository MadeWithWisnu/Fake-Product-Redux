import { styled } from 'styled-components';

const StyledProductWrapper = styled.div`
    display: flex;
    gap: 48px;
    align-items: flex-start;
`;

export function ProductWrapper({ children }) {
    return <StyledProductWrapper>{children}</StyledProductWrapper>;
}
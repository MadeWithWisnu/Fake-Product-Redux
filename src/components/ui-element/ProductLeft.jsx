import { styled } from 'styled-components';

const StyledProductLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export function ProductLeft({ children }) {
    return <StyledProductLeft>{children}</StyledProductLeft>;
}
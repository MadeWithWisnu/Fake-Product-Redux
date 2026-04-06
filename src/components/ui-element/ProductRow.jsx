import { styled } from 'styled-components';

const StyledProductRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid #f0f0f0;
`;

export function ProductRow({ children }) {
    return <StyledProductRow>{children}</StyledProductRow>;
}
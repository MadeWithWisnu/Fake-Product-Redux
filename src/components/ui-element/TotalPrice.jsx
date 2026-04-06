import { styled } from 'styled-components';

const StyledTotalPrice = styled.div`
    font-weight: bold;
    color: #686de0;
`;

export function TotalPrice({ children }) {
    return <StyledTotalPrice>{children}</StyledTotalPrice>;
}
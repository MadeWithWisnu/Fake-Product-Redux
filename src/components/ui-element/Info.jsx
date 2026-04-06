import { styled } from 'styled-components';

const StyledInfo = styled.div`
    text-align: center;
`;

export function Info({ children }) {
    return <StyledInfo>{children}</StyledInfo>;
}
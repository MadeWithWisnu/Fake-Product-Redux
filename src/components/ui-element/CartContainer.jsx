import { styled } from 'styled-components';

const StyledCartContainer = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export function CartContainer({ children }) {
    return <StyledCartContainer>{children}</StyledCartContainer>;
}
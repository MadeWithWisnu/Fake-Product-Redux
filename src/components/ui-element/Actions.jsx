import { styled } from 'styled-components';

const StyledActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export function Actions({ children }) {
    return (
        <StyledActions>{children}</StyledActions>
    );
}
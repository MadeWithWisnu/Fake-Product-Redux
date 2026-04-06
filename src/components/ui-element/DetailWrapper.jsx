import { styled } from 'styled-components';

const StyledDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
    padding-top: 8px;
`;

export function DetailWrapper({ children }) {
    return <StyledDetailWrapper>{children}</StyledDetailWrapper>;
}
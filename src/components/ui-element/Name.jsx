import { styled } from 'styled-components';

const StyledName = styled.div`
    font-weight: 600;
    font-size: 12px;
    height: 40px;
    overflow: hidden;
    color: #4b6584;
    margin-bottom: 8px;
`;

export function Name({ children }) {
    return <StyledName>{children}</StyledName>;
}
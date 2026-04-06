import { styled } from 'styled-components';

const StyledDivider = styled.div`
    height: 1px;
    background: linear-gradient(to right, #e0e4f0, transparent);
    margin: 4px 0;
`;

export function Divider() {
    return <StyledDivider />;
}
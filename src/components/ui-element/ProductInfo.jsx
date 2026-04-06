import { styled } from 'styled-components';

const StyledProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #4b6584;

    a {
        color: #686de0;
        text-decoration: none;
        font-weight: bold;
        &:hover { text-decoration: underline; }
    }
`;

export function ProductInfo({ children }) {
    return <StyledProductInfo>{children}</StyledProductInfo>;
}
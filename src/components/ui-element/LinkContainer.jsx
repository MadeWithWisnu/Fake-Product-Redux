import { styled } from 'styled-components';

const StyledLinkContainer = styled.div`
    margin-top: auto;

    a {
        display: block;
        background-color: #546de5;
        color: white;
        border-radius: 8px;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            background-color: #3c5ac9;
        }
    }
`;

export function LinkContainer({ children }) {
    return <StyledLinkContainer>{children}</StyledLinkContainer>;
}
import { styled } from 'styled-components';

const StyledDescription = styled.div`
    background: #f8f9fe;
    border-left: 4px solid #546de5;
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;

    h3 {
        font-size: 12px;
        letter-spacing: 1px;
        color: #546de5;
        text-transform: uppercase;
        margin-bottom: 8px;
        font-weight: 700;
    }

    p {
        color: #4b6584;
        font-size: 14px;
        line-height: 1.7;
    }
`;

export function Description({ children }) {
    return <StyledDescription>{children}</StyledDescription>;
}
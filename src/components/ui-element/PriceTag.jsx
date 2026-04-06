import { styled } from 'styled-components';

const StyledPriceTag = styled.div`
    display: inline-flex;
    align-items: center;
    background: linear-gradient(135deg, #1e90ff, #546de5);
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 24px;
    border-radius: 12px;
    width: fit-content;
    box-shadow: 0 4px 16px rgba(84,109,229,0.3);
    letter-spacing: 0.5px;
`;

export function PriceTag({ children }) {
    return <StyledPriceTag>{children}</StyledPriceTag>;
}
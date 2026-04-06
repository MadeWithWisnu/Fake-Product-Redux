import { styled } from 'styled-components';

const StyledCard = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid #dcdde1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

export function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}
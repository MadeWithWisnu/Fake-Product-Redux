import { styled } from 'styled-components';

const StyledScreen = styled.div`
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 120px;
        height: 120px;
        object-fit: contain;
    }
`;

export function Screen({ children }) {
    return <StyledScreen>{children}</StyledScreen>;
}
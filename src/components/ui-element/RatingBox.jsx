import { styled } from 'styled-components';

const StyledRatingBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fffbf0;
    border: 1px solid #fde9a2;
    border-radius: 10px;
    padding: 10px 16px;
    width: fit-content;
`;

export function RatingBox({ children }) {
    return <StyledRatingBox>{children}</StyledRatingBox>;
}
import { styled } from 'styled-components';

const StyledRatingWrapper = styled.div`
    margin-bottom: 8px;
`;

export function RatingWrapper({ children }) {
    return <StyledRatingWrapper>{children}</StyledRatingWrapper>;
}
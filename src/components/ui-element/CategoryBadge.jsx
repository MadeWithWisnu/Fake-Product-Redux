import { styled } from 'styled-components';

const StyledCategoryBadge = styled.span`
    display: inline-block;
    background: #eef0fb;
    color: #546de5;
    border: 1px solid #c5cbf5;
    border-radius: 20px;
    padding: 4px 14px;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
`;

export function CategoryBadge({ children }) {
    return <StyledCategoryBadge>{children}</StyledCategoryBadge>;
}
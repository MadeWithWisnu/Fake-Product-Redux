import { styled } from 'styled-components';

const StyledDateHeader = styled.h3`
    color: #4b6584;
    margin-bottom: 16px;
    font-size: 14px;
    letter-spacing: 1px;

    span {
        color: #686de0;
    }
`;

export function DateHeader({ date }) {
    return (
        <StyledDateHeader>
            DATE: <span>{date}</span>
        </StyledDateHeader>
    );
}
import { styled } from 'styled-components';

const StyledUserName = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 15px;
    color: #4b6584;
`;

export default function UserName({ children }) {
    return (
        <StyledUserName>{children}</StyledUserName>
    );
}
import { styled } from 'styled-components';

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function UserInfo({ children }) {
    return (
        <StyledUserInfo>{children}</StyledUserInfo>
    );
}
import { styled } from 'styled-components';

const StyledUserMeta = styled.div`
    margin-bottom: 4px;
    color: #4b6584;

    & span:first-child {
        color: #686de0;
        margin-right: 5px;
    }
`;

export default function UserMeta({ label, value }) {
    return (
        <StyledUserMeta>
            <span>{label}: </span>
            <span>{value}</span>
        </StyledUserMeta>
    );
}
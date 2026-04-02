// components/user/UserRow.jsx
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UserName = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 15px;
    color: #4b6584;
`;

const UserMeta = styled.div`
    margin-bottom: 4px;
    color: #4b6584;

    & span:first-child {
        color: #686de0;
        margin-right: 5px;
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export default function UserRow({ user }) {
    const fullName = user.name ?? '';

    return (
        <List>
            <UserInfo>
                <UserName>{fullName}</UserName>
                <UserMeta>
                    <span>username: </span>
                    <span>{user.username}</span>
                </UserMeta>
                <UserMeta>
                    <span>email: </span>
                    <span>{user.email}</span>
                </UserMeta>
            </UserInfo>

            <Actions>
                <BaseButton as={Link} to={`/user/contact/${user._id}`}>Contact</BaseButton>
                <BaseButton as={Link} to={`/user/cart/${user._id}`}>Cart</BaseButton>
            </Actions>
        </List>
    );
}
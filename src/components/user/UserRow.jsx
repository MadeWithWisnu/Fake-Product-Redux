import { Link } from 'react-router-dom';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import UserInfo from '../ui-element/UserInfo';
import UserName from '../ui-element/UserName';
import UserMeta from '../ui-element/UserMeta';
import { Actions } from '../ui-element/Actions';

export default function UserRow({ user }) {
    const fullName = `${user.name?.firstname ?? ''} ${user.name?.lastname ?? ''}`;

    return (
        <List>
            <UserInfo>
                <UserName>{fullName}</UserName>
                <UserMeta label="username" value={user.username} />
                <UserMeta label="email" value={user.email} />
            </UserInfo>

            <Actions>
                <BaseButton as={Link} to={`/user/contact/${user.id}`}>Contact</BaseButton>
                <BaseButton as={Link} to={`/user/cart/${user.id}`}>Cart</BaseButton>
            </Actions>
        </List>
    );
}
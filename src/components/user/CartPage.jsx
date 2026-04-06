import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import ToDoSideBar from './ToDoSideBar';
import UserInfo from '../ui-element/UserInfo';
import UserName from '../ui-element/UserName';
import UserMeta from '../ui-element/UserMeta';
import { Actions } from '../ui-element/Actions';
import { getUserByIdAPI, getCartsByUserAPI } from '../../services/cart-service';

export default function CartPage() {
    const { id } = useParams();

    const { data: user } = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUserByIdAPI(id),
        staleTime: 60000
    });

    const { data: carts, isLoading: cartLoading } = useQuery({
        queryKey: ['carts', id],
        queryFn: () => getCartsByUserAPI(id),
        staleTime: 60000
    });

    const fullName = user ? `${user.name?.firstname ?? ''} ${user.name?.lastname ?? ''}` : '…';

    return (
        <>
            <NavBar />
            <SimpleWrapper>
                {user && (
                    <List>
                        <UserInfo>
                            <UserName>{fullName}</UserName>
                            <UserMeta label="username" value={user.username} />
                            <UserMeta label="email" value={user.email} />
                        </UserInfo>
                        <Actions>
                            <BaseButton as={Link} to="/user">Back</BaseButton>
                        </Actions>
                    </List>
                )}

                {cartLoading && (
                    <p style={{ textAlign: 'center', color: '#4b6584' }}>Loading cart…</p>
                )}
                {carts?.map((cart) => (
                    <ToDoSideBar key={cart.id} cart={cart} />
                ))}
            </SimpleWrapper>
        </>
    );
}
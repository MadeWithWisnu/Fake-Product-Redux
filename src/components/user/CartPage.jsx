import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById, fetchCartsByUser } from '../../store/user-slice';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import ToDoSideBar from './ToDoSideBar';
import UserInfo from '../ui-element/UserInfo';
import UserName from '../ui-element/UserName';
import UserMeta from '../ui-element/UserMeta';
import { Actions } from '../ui-element/Actions';

export default function CartPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { detail: user, carts, cartStatus } = useSelector((s) => s.user);

    useEffect(() => {
        // ✅ fetchPosts dihapus — product sudah di-join di dalam fetchCartsByUser
        dispatch(fetchUserById(id));
        dispatch(fetchCartsByUser(id));
    }, [id, dispatch]);

    return (
        <>
            <NavBar />
            <SimpleWrapper>
                {user && (
                    <List>
                        <UserInfo>
                            <UserName>
                                {user.name.firstname} {user.name.lastname}
                            </UserName>
                            <UserMeta label="username" value={user.username} />
                            <UserMeta label="email" value={user.email} />
                        </UserInfo>
                        <Actions>
                            <BaseButton as={Link} to="/user">Back</BaseButton>
                        </Actions>
                    </List>
                )}

                {cartStatus === 'loading' && (
                    <p style={{ textAlign: 'center', color: '#4b6584' }}>Loading cart…</p>
                )}
                {cartStatus === 'succeeded' &&
                    carts.map((cart) => (
                        <ToDoSideBar key={cart.id} cart={cart} />
                    ))
                }
            </SimpleWrapper>
        </>
    );
}
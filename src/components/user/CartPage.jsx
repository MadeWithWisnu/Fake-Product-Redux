import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById, fetchCartsByUser } from '../../store/user-slice';
import { fetchPosts } from '../../store/post-slice';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import ToDoSideBar from './ToDoSideBar';
import { styled } from 'styled-components';

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

export default function CartPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { detail: user, carts, cartStatus } = useSelector((s) => s.user);
    const { status: postStatus } = useSelector((s) => s.post);

    useEffect(() => {
        dispatch(fetchUserById(id));
        dispatch(fetchCartsByUser(id));
        if (postStatus === 'idle') dispatch(fetchPosts());
    }, [id, dispatch]);
    return (
        <>
            <NavBar />

            <SimpleWrapper>
                {/* Info user + tombol Back — reuse struktur sama seperti UserRow */}
                {user && (
                    <List>
                        <UserInfo>
                            <UserName>
                                {user.name}
                            </UserName>
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
                            <BaseButton as={Link} to="/user">Back</BaseButton>
                        </Actions>
                    </List>
                )}

                {/* Daftar cart per tanggal */}
                {cartStatus === 'loading' && (
                    <p style={{ textAlign: 'center', color: '#4b6584' }}>Loading cart…</p>
                )}
                {cartStatus === 'succeeded' &&
                    carts.map((cart) => (
                        <ToDoSideBar key={cart._id} cart={cart} />
                    ))
                }
            </SimpleWrapper>
        </>
    );
}
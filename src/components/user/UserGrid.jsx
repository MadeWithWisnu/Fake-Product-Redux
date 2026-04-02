import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { fetchUsers } from '../../store/user-slice';
import UserRow from './UserRow';

const LoadingText = styled.p`
    text-align: center;
    color: #4b6584;
    font-size: 16px;
    margin-top: 20px;
`;

const ErrorText = styled.p`
    text-align: center;
    color: #e74c3c;
    font-size: 16px;
    margin-top: 20px;
`;

export default function UserGrid() {
    const dispatch = useDispatch();
    const { list: users = [], status } = useSelector((state) => state.user);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <LoadingText>Loading users…</LoadingText>;
    if (status === 'failed')  return <ErrorText>Gagal memuat data user.</ErrorText>;

    return (
        <>
            {users.map((user) => (
                <UserRow key={user._id} user={user} />
            ))}
        </>
    );
}
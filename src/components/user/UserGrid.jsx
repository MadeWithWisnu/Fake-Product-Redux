import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/user-slice';
import { LoadingText } from '../ui-element/LoadingText';
import { ErrorText } from '../ui-element/ErrorText';
import UserRow from './UserRow';

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
                <UserRow key={user.id} user={user} />
            ))}
        </>
    );
}
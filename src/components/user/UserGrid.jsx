import UserRow from './UserRow';
import { useQuery } from '@tanstack/react-query';
import { getAllUsersAPI } from '../../services/user-service';

export default function UserGrid({ selectedUserId }) {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUsersAPI(),
        staleTime: 60000
    });

    return (
        <>
            {users.map((user) => (
                <UserRow key={user.id} user={user} />
            ))}
        </>
    );
}
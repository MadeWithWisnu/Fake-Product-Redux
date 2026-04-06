import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import UserGrid from './UserGrid';

export default function UserPage() {
    const [selectedUserId, setSelectedUserId] = useState(null);

    return (
        <>
            <NavBar />
            <SimpleWrapper>
                <UserGrid selectedUserId={selectedUserId} onSelect={setSelectedUserId} />
            </SimpleWrapper>
            <Outlet />
        </>
    );
}
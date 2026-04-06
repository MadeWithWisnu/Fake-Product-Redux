import { Outlet } from 'react-router-dom';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import UserGrid from './UserGrid';

export default function UserPage() {
    return (
        <>
            <NavBar />

            <SimpleWrapper>
                <UserGrid />
            </SimpleWrapper>

            <Outlet />
        </>
    );
}
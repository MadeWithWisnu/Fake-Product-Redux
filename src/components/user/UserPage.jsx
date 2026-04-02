// components/user/UserPage.jsx
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

            {/* ContactDialog muncul di sini sebagai modal overlay
                saat route /user/contact/:id aktif */}
            <Outlet />
        </>
    );
}
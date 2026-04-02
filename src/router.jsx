import { createBrowserRouter } from "react-router-dom";
import UserPage from "./components/user/UserPage";
import ContactDialog from "./components/user/ContactDialog";


const router = createBrowserRouter([
    {
        path: '/',
        Component: UserPage,
    },
    {
        path: 'user',
        Component: UserPage,
        children: [
            {
                path: 'contact/:id',
                Component: ContactDialog,
            },
        ],
    },
    // {
    //     path: 'user/:userId/cart',
    //     Component: CartPage,
    // },
    // {
    //     path: 'post',
    //     Component: PostGrid,
    // },
    // {
    //     path: 'post/:id',
    //     Component: PostPage,
    // },
]);

export default router;
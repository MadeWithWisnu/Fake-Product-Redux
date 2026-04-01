import { createBrowserRouter } from "react-router-dom";


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
    {
        path: 'user/:userId/cart',
        Component: CartPage,
    },
    {
        path: 'post',
        Component: PostGrid,
    },
    {
        path: 'post/:id',
        Component: PostPage,
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import UserPage from "./components/user/UserPage";
import ContactDialog from "./components/user/ContactDialog";
import CartPage from "./components/user/CartPage";
import PostGrid from "./components/post/PostGrid";
import PostPage from "./components/post/PostPage";


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
        path: 'user/cart/:id',   // ← pisah jadi route sendiri
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
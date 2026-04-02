import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/post-slice";
import { Grid } from "../ui-element/Grid";
import NavBar from "../ui-element/NavBar";
import PostRow from "./PostRow";

export default function PostGrid() {
    const dispatch = useDispatch();
    const { list: products, status } = useSelector((state) => state.post);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    return (
        <>
            <NavBar />
            <Grid>
                {status === "loading" &&
                    Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} style={{ backgroundColor: "white", borderRadius: "6px", opacity: 0.4 }} />
                    ))}
                {status === "succeeded" &&
                    products.map((product) => (
                        <PostRow key={product._id} product={product} />
                    ))}
            </Grid>
        </>
    );
}
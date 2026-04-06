import { useQuery } from '@tanstack/react-query';
import { getAllProductsAPI } from '../../services/product-service';
import { Grid } from '../ui-element/Grid';
import NavBar from '../ui-element/NavBar';
import PostRow from './PostRow';

export default function PostGrid() {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getAllProductsAPI(),
        staleTime: 60000
    });

    return (
        <>
            <NavBar />
            <Grid>
                {isLoading &&
                    Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} style={{ backgroundColor: 'white', borderRadius: '6px', opacity: 0.4 }} />
                    ))}
                {products?.map((product) => (
                    <PostRow key={product.id} product={product} />
                ))}
            </Grid>
        </>
    );
}
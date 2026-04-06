import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductByIdAPI } from '../../services/product-service';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import StarRating from '../ui-element/StarRating';
import { Actions } from '../ui-element/Actions';
import { LoadingText } from '../ui-element/LoadingText';
import { ProductWrapper } from '../ui-element/ProductWrapper';
import { ImageContainer } from '../ui-element/ImageContainer';
import { DetailWrapper } from '../ui-element/DetailWrapper';
import { PriceTag } from '../ui-element/PriceTag';
import { RatingBox } from '../ui-element/RatingBox';
import { Divider } from '../ui-element/Divider';
import { CategoryBadge } from '../ui-element/CategoryBadge';
import { Description } from '../ui-element/Description';
import { BaseTitle } from '../ui-element/BaseTitle';

export default function PostPage() {
    const { id } = useParams();

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductByIdAPI(id),
        staleTime: 60000,
        enabled: !!id
    });

    return (
        <>
            <NavBar />
            <SimpleWrapper>
                <List>
                    <Actions>
                        <BaseButton as={Link} to="/post">← Back to Product List</BaseButton>
                    </Actions>
                </List>

                {isLoading && (
                    <LoadingText>Loading product…</LoadingText>
                )}

                {!isLoading && product && (
                    <List>
                        <ProductWrapper>
                            <ImageContainer>
                                <img src={product.image} alt={product.title} />
                            </ImageContainer>

                            <DetailWrapper>
                                <BaseTitle>{product.title}</BaseTitle>
                                <PriceTag>$ {product.price}</PriceTag>
                                <RatingBox>
                                    <StarRating rating={product.rating?.rate} showValue />
                                </RatingBox>
                                <Divider />
                                <div>
                                    <CategoryBadge>📦 {product.category}</CategoryBadge>
                                </div>
                                <Description>
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </Description>
                            </DetailWrapper>
                        </ProductWrapper>
                    </List>
                )}
            </SimpleWrapper>
        </>
    );
}
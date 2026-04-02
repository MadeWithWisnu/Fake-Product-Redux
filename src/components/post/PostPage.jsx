import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../../store/post-slice';
import NavBar from '../ui-element/NavBar';
import { SimpleWrapper } from '../ui-element/SimpleWrapper';
import { List } from '../ui-element/List';
import BaseButton from '../ui-element/BaseButton';
import StarRating from '../ui-element/StarRating';
import { styled } from 'styled-components';

// 🎨 Styled Components

const OldPrice = styled.span`
    text-decoration: line-through;
    color: #95a5a6;
    margin-left: 10px;
    font-size: 16px;
`;

const DiscountPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #e74c3c;
`;

const Badge = styled.span`
    background-color: #e74c3c;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 6px;
    margin-left: 10px;
`;

const SizeWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
`;

const SizeItem = styled.span`
    border: 1px solid #dcdde1;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 13px;
`;

const ProductWrapper = styled.div`
    display: flex;
    gap: 40px;
    align-items: flex-start;
`;

const ImageContainer = styled.div`
    flex-shrink: 0;

    img {
        width: 320px;
        object-fit: contain;
    }
`;

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #2f3640;
`;

const Price = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #2d98da;
    margin: 10px 0;
`;

const Section = styled.div`
    margin-top: 12px;
    color: #4b6584;
`;

const Rate = styled.div`
    display: flex;
    gap: 5px;
    justify-content: left;
`;

const Label = styled.span`
    font-weight: bold;
    margin-right: 6px;
    color: #686de0;
`;

const Description = styled.div`
    margin-top: 20px;

    h3 {
        margin-bottom: 5px;
        color: #2f3640;
    }

    p {
        color: #4b6584;
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export default function PostPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { detail: product, detailStatus } = useSelector((state) => state.post);

    const finalPrice = product?.discountedPrice || product?.price;

    const discountPercent = product?.oldPrice
        ? Math.round(
            ((product.oldPrice - finalPrice) / product.oldPrice) * 100
        )
        : 0;

    useEffect(() => {
        if (id) {
            dispatch(fetchPostById(id));
        }
    }, [id, dispatch]);
    return (
        <>
            <NavBar />

            <SimpleWrapper>
                {/* Back Button */}
                <List>
                    <Actions>
                        <BaseButton as={Link} to="/post">
                            Back to Product List
                        </BaseButton>
                    </Actions>
                </List>

                {/* Loading */}
                {detailStatus === 'loading' && (
                    <p style={{ textAlign: 'center', color: '#4b6584' }}>
                        Loading product…
                    </p>
                )}

                {/* Detail Product */}
                {detailStatus === 'succeeded' && product && (
                    <List>
                        <ProductWrapper>
                            <ImageContainer>
                                <img src={product.image} alt={product.title} />
                            </ImageContainer>

                            <DetailWrapper>
                                <Title>
                                    {product.title}
                                    {product.isNew && <Badge>NEW</Badge>}
                                    {discountPercent > 0 && <Badge>-{discountPercent}%</Badge>}
                                </Title>

                                {/* Harga */}
                               <div>
                                    <Price>$ {finalPrice}</Price>

                                    {/* tampilkan harga lama hanya kalau ada diskon */}
                                    {discountPercent > 0 && (
                                        <OldPrice>$ {product.oldPrice}</OldPrice>
                                    )}
                                </div>

                                {/* Rating */}
                                <Rate>
                                    <StarRating rating={product.rating} showValue />
                                </Rate>

                                {/* Brand */}
                                <Section>
                                    <Label>BRAND:</Label>
                                    {product.brand}
                                </Section>

                                {/* Type */}
                                <Section>
                                    <Label>TYPE:</Label>
                                    {product.type}
                                </Section>

                                {/* Category */}
                                <Section>
                                    <Label>CATEGORY:</Label>
                                    {product.category}
                                </Section>

                                {/* Stock */}
                                <Section>
                                    <Label>STOCK:</Label>
                                    {product.stock} Unit(s)
                                </Section>

                                {/* Size */}
                                <Section>
                                    <Label>SIZE:</Label>
                                    <SizeWrapper>
                                        {product.size?.map((s, i) => (
                                            <SizeItem key={i}>{s}</SizeItem>
                                        ))}
                                    </SizeWrapper>
                                </Section>

                                {/* Description */}
                                <Description>
                                    <h3>DESCRIPTION</h3>
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
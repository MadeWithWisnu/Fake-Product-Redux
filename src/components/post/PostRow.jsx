import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import StarRating from '../ui-element/StarRating';

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid #dcdde1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

const Screen = styled.div`
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        max-height: 120px;
        object-fit: contain;
    }
`;

const Info = styled.div`
    text-align: center;
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 14px;
    height: 40px;
    overflow: hidden;
    color: #4b6584;
    margin-bottom: 8px;
`;

const RatingWrapper = styled.div`
    margin-bottom: 8px;
`;

const Price = styled.div`
    font-weight: bold;
    color: #1e90ff;
    font-size: 16px;
    margin-bottom: 12px;
`;

const LinkContainer = styled.div`
    margin-top: auto;

    a {
        display: block;
        background-color: #546de5;
        color: white;
        border-radius: 8px;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            background-color: #3c5ac9;
        }
    }
`;

export default function PostRow({ product }) {
    return (
        <Card>
            <Screen>
                <img src={product.image} alt={product.title} />
            </Screen>

            <Info>
                <Name>{product.title}</Name>

                <RatingWrapper>
                    <StarRating
                        rating={product.rating} showValue
                    />
                </RatingWrapper>

                <Price>$ {product.price}</Price>
            </Info>

            <LinkContainer>
                <Link to={`/post/${product._id}`}>View Detail</Link>
            </LinkContainer>
        </Card>
    );
}
import { Link } from 'react-router-dom';
import StarRating from '../ui-element/StarRating';
import { Card } from '../ui-element/Card';
import { Screen } from '../ui-element/Screen';
import { Info } from '../ui-element/Info';
import { Name } from '../ui-element/Name';
import { RatingWrapper } from '../ui-element/RatingWrapper';
import { Price } from '../ui-element/Price';
import { LinkContainer } from '../ui-element/LinkContainer';

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
                        rating={product.rating?.rate} count={product.rating?.count}
                    />
                </RatingWrapper>

                <Price>$ {product.price}</Price>
            </Info>

            <LinkContainer>
                <Link to={`/post/${product.id}`}>View Detail</Link>
            </LinkContainer>
        </Card>
    );
}
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const ProductRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid #f0f0f0;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #4b6584;

    a {
        color: #686de0;
        text-decoration: none;
        font-weight: bold;
        &:hover { text-decoration: underline; }
    }
`;

const TotalPrice = styled.div`
    font-weight: bold;
    color: #686de0;
`;

export default function ToDoList({ productId, quantity }) {
    const products = useSelector((state) => state.post.list);
    const product = products.find((p) => p.id === productId);

    if (!product) return null;

    const total = (product.price * quantity).toFixed(2);

    return (
        <ProductRow>
            <Left>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <Link to={`/post/${product._id}`}>{product.title}</Link>
                    <span>Qty: {quantity}</span>
                    <span>Unit Price: $ {product.price}</span>
                </ProductInfo>
            </Left>
            <TotalPrice>Total: $ {total}</TotalPrice>
        </ProductRow>
    );
}
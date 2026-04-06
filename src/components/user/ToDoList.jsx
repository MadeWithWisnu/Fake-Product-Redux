import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductRow } from '../ui-element/ProductRow';
import { ProductLeft } from '../ui-element/ProductLeft';
import { ProductImage } from '../ui-element/ProductImage';
import { ProductInfo } from '../ui-element/ProductInfo';
import { TotalPrice } from '../ui-element/TotalPrice';

export default function ToDoList({ productId, quantity }) {
    const products = useSelector((state) => state.post.list);
    const product = products.find((p) => p.id === productId);

    if (!product) return null;

    const total = (product.price * quantity).toFixed(2);

    return (
        <ProductRow>
            <ProductLeft>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <Link to={`/post/${product.id}`}>{product.title}</Link>
                    <span>Qty: {quantity}</span>
                    <span>Unit Price: $ {product.price}</span>
                </ProductInfo>
            </ProductLeft>
            <TotalPrice>Total: $ {total}</TotalPrice>
        </ProductRow>
    );
}
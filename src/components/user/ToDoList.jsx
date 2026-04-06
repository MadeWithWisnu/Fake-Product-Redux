import { Link } from 'react-router-dom';
import { ProductRow } from '../ui-element/ProductRow';
import { ProductLeft } from '../ui-element/ProductLeft';
import { ProductImage } from '../ui-element/ProductImage';
import { ProductInfo } from '../ui-element/ProductInfo';
import { TotalPrice } from '../ui-element/TotalPrice';

export default function ToDoList({ item }) {
    const { productDetail, quantity } = item;

    if (!productDetail) return null;

    const total = (productDetail.price * quantity).toFixed(2);

    return (
        <ProductRow>
            <ProductLeft>
                <ProductImage src={productDetail.image} alt={productDetail.title} />
                <ProductInfo>
                    <Link to={`/post/${productDetail.id}`}>{productDetail.title}</Link>
                    <span>Qty: {quantity}</span>
                    <span>Unit Price: $ {productDetail.price}</span>
                </ProductInfo>
            </ProductLeft>
            <TotalPrice>Total: $ {total}</TotalPrice>
        </ProductRow>
    );
}
import { styled } from 'styled-components';
import ToDoList from './ToDoList';

const CartContainer = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const DateHeader = styled.h3`
    color: #4b6584;
    margin-bottom: 16px;
    font-size: 14px;
    letter-spacing: 1px;

    span {
        color: #686de0;
    }
`;

export default function ToDoSideBar({ cart }) {
    return (
        <CartContainer>
            <DateHeader>DATE: <span>{cart.date?.slice(0, 10)}</span></DateHeader>
            {cart.products.map((item, i) => (
                <ToDoList key={i} productId={item.productId} quantity={item.quantity} />
            ))}
        </CartContainer>
    );
}
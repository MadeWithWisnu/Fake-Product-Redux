import { CartContainer } from '../ui-element/CartContainer';
import { DateHeader } from '../ui-element/DateHeader';
import ToDoList from './ToDoList';

export default function ToDoSideBar({ cart }) {
    return (
        <CartContainer>
            <DateHeader date={cart.date?.slice(0, 10)} />
            {cart.products.map((item, i) => (
                <ToDoList key={i} productId={item.productId} quantity={item.quantity} />
            ))}
        </CartContainer>
    );
}
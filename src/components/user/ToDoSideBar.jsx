import { CartContainer } from '../ui-element/CartContainer';
import { DateHeader } from '../ui-element/DateHeader';
import ToDoList from './ToDoList';

export default function ToDoSideBar({ cart }) {
    return (
        <CartContainer>
            <DateHeader date={cart.date?.slice(0, 10)} />
            {/* kirim seluruh item (sudah berisi productDetail) */}
            {cart.products.map((item, i) => (
                <ToDoList key={i} item={item} />
            ))}
        </CartContainer>
    );
}
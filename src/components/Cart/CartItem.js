import { useDispatch } from "react-redux";
import { purchasesActions } from "../../store/purchasesSlice";


const CartItem = ({data: {id, title, price, quantity, totalPrice}}) => {
    const dispatchProducts = useDispatch();

    const increaseProductsHandler = () => {
        dispatchProducts(purchasesActions.increaseProduct({id, title, price, quantity, totalPrice}))
    }

    const decreaseProductsHandler = () => {
        dispatchProducts(purchasesActions.decreaseProduct(id))
    }

    return (
        <>
            <ul style={{borderTop: '5px solid rgb(211, 82, 26)'}}>
                <li>{title} <div>${totalPrice} (${price}/p.)  </div></li>
            </ul>

            <div className='count'>
                <div>x{quantity}</div>
                <div>
                    <button 
                        onClick={increaseProductsHandler}
                        className='buttons-purchases'>+</button>
                    <button 
                        onClick={decreaseProductsHandler}
                        className='buttons-purchases'>-</button>
                </div>
            </div>
        </>
    )
};

export default CartItem;
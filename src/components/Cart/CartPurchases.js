import { useSelector, useDispatch } from 'react-redux';
import { purchasesActions } from '../../store/purchasesSlice';

import './cartPurchases.scss';

const CartPurchases = () => {

    const dispatchProducts = useDispatch();

    const increaseProductsHandler = () => {
        dispatchProducts(purchasesActions.increaseProduct())
    }

    const decreaseProductsHandler = () => {
        dispatchProducts(purchasesActions.decreaseProduct())
    }
    
    const productsCount = useSelector(state => state.purchasesSlice.count);
    const productsTotalValue = useSelector(state => state.purchasesSlice.totalValue)
    const productsValue = useSelector(state => state.purchasesSlice.value)

    return (
        <div className='cart-purchases'>
            <h2>My purchases</h2>
            <ul>
                <li>Some product <div>${productsTotalValue} (${productsValue}/p.)  </div></li>
            </ul>

            <div className='count'>
                <div>x{productsCount}</div>
                <div>
                    <button 
                        onClick={increaseProductsHandler}
                        className='buttons-purchases'>+</button>
                    <button 
                        onClick={decreaseProductsHandler}
                        className='buttons-purchases'>-</button>
                </div>
            </div>
        </div>
    )
};

export default CartPurchases;
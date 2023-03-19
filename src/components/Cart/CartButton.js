import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartSlice';

import './cartButton.scss';

const CartButton = () => {
    const dispatchVisibleProducts = useDispatch();
    const productsCount = useSelector(state => state.purchasesSlice.count)

    const toggleVisible = () => {
        dispatchVisibleProducts(cartActions.setCartVisible())
    }

    return (
        <button 
            onClick={toggleVisible}
            className='cart-button'>
            <span className='shopping-cart'>Корзина</span>
            <span className='count'>{productsCount}</span>
        </button>
    )
};

export default CartButton;
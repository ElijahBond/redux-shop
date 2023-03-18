import './cartButton.scss';

const CartButton = () => {

    return (
        <button className='cart-button'>
            <span className='shopping-cart'>Корзина</span>
            <span className='count'>2</span>
        </button>
    )
};

export default CartButton;
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

import './cartPurchases.scss';

const CartPurchases = () => {

    const allItems = useSelector(state => state.purchasesSlice.items)    

    return (
        <div className='cart-purchases'>
            <h2>My purchases</h2>
            {allItems.map(item => {
                return <CartItem key={item.id} data={item} />
            })}
        </div>
    )
};

export default CartPurchases;
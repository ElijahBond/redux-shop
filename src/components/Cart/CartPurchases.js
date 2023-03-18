import './cartPurchases.scss';

const CartPurchases = () => {

    return (
        <div className='cart-purchases'>
            <h2>My purchases</h2>
            <ul>
                <li>Best product <div>$14.00 ($7.00/p.)</div></li>
            </ul>

            <div className='count'>
                <div>x2</div>
                <div>
                    <button className='buttons-purchases'>+</button>
                    <button className='buttons-purchases'>-</button>
                </div>
            </div>
        </div>
    )
};

export default CartPurchases;
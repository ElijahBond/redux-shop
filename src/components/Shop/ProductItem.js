import { useDispatch, useSelector } from 'react-redux';
import { purchasesActions } from '../../store/purchasesSlice';

const ProductItem = ({data: { id, price, title, description }}) => {
    const cart = useSelector(state => state.purchasesSlice)
    const increaseProducts = useDispatch()

    const increaseProductsHandler = () => {
        const updatedItemsQuantity = cart.itemsQuantity + 1;

        const updatedItems = cart.items.slice();
        const existingItem = updatedItems.find(item => item.id === id)

        if (existingItem) {
            const updatedExistingItem = {...existingItem}
            updatedExistingItem.quantity++;
            updatedExistingItem.totalPrice = updatedExistingItem.totalPrice + price;

            const existingItemIndex = updatedItems.findIndex(item => item.id === id)
            updatedItems[existingItemIndex] = updatedExistingItem;
        } else {
            updatedItems.push({
                id,
                price,
                quantity: 1,
                totalPrice: price,
                title
            })
        }

        const updatedCart = {
            itemsQuantity: updatedItemsQuantity,
            items: updatedItems
        }

        increaseProducts(purchasesActions.updateCart(updatedCart))

        // increaseProducts(
        //     purchasesActions.increaseProduct({ 
        //         id, 
        //         price, 
        //         title 
        //     })
        // )
    };

    return(
        <>
            <div className='product-name'>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <div className='description'>
                <span>{description}</span>
            </div>

            <div className='border'>
            <button 
                onClick={increaseProductsHandler}
                className='buy'>
                    I want IT!!!
            </button>
            </div>
        </>
    )
};

export default ProductItem;
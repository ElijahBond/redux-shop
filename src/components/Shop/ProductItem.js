import { useDispatch } from 'react-redux';
import { purchasesActions } from '../../store/purchasesSlice';

const ProductItem = ({data: { id, price, title, description }}) => {

    // const productsValue = useSelector(state => state.purchasesSlice.value)
    const increaseProducts = useDispatch()

    const increaseProductsHandler = () => {
        increaseProducts(purchasesActions.increaseProduct({ id, price, title }))
    }

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
// глупый массив продуктов и мэп всех продуктов
import { useSelector, useDispatch } from 'react-redux';
import { purchasesActions } from '../../store/purchasesSlice';

import './products.scss';

const Products = () => {
    
    const productsValue = useSelector(state => state.purchasesSlice.value)
    const increaseProducts = useDispatch()

    const increaseProductsHandler = () => {
        increaseProducts(purchasesActions.increaseProduct())
    }

    return (
        <div className='products'>
            <div className='product-name'>
                <h3>Some product</h3>
                <p>${productsValue}</p>
            </div>
            <div className='description'>
                <span>Some description</span>
            </div>

            <button 
                onClick={increaseProductsHandler}
                className='buy'>I want IT!!!</button>
        </div>
    )
}

export default Products;
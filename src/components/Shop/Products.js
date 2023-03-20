
import ProductItem from './ProductItem';

import './products.scss';

const DUMMY_ITEMS = [
    {
        id: '1',
        price: 8,
        title: 'Some product 1',
        description: 'Some description'
    },
    {
        id: '2',
        price: 9,
        title: 'Some product 2',
        description: 'Some description'
    },
    {
        id: '3',
        price: 10,
        title: 'Some product 3',
        description: 'Some description'
    }
]

const Products = () => {

    const items = DUMMY_ITEMS.map(item => {
        return (
            <ProductItem key={item.id} data={item}  />
        )
    })
    
    return (
        <div className='products'>
            { items }
        </div>
    )
}

export default Products;
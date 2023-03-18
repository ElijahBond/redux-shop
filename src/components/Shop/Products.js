// глупый массив продуктов и мэп всех продуктов 

import './products.scss';

const Products = () => {

    return (
        <div className='products'>
            <div className='product-name'>
                <h3>Product</h3>
                <p>$7.00</p>
            </div>
            <div className='description'>
                <span>Some description</span>
            </div>

            <button className='buy'>I want IT!!!</button>
        </div>
    )
}

export default Products;
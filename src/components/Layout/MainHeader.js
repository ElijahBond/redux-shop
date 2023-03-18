import CartButton from "../Cart/CartButton";

import './mainHeader.scss';

const MainHeader = () => {
    return (
        <div className="main-header">
            <div>Simple store</div>
            <CartButton />
        </div>
    )
}

export default MainHeader;
import React from 'react';
import Cart from '../../Components/Cart/cart';

const Sidebar = (props) => {
    return (
        <div>
            <button>Sort by ratings</button>
            <br/>
            <button>Sort by price</button>
            <Cart ></Cart>
        </div>
    )
}

export default Sidebar;

import React from 'react';
import logo from '../../Assets/logo.png';
import wish from '../../Assets/icons/wish.svg';
import wishFiilled from '../../Assets/icons/wish-filled.svg';
import cart from '../../Assets/icons/cart.svg';
import profile from '../../Assets/icons/user.svg';
import search from '../../Assets/icons/search.svg';

const Header = props => {

  // onInputHandler = function() {
  //   console.log(props.searchText);
  // }
    return(
        <div className="app-header d-flex justify-content-between">
          <div className="d-flex justify-content-start p-3">
          <div className="icon">
              <img height="50px" src={logo}/>
            </div>
          </div>
          <div className="search-box">
            <span className="pr-2"><img height="25px" src={search}/></span>
            <input placeholder="Search the book" onInput={props.onInputHandler}/>
          </div>
          <div className="d-flex justify-content-end p-3">
            <div className="icon">
              <img height="25px" src={wish}/>
              <p>Wishlist</p>
            </div>
            <div className="icon">
              <img height="25px" src={cart}/>
              <p>Cart</p>
            </div>
            <div className="icon">
              <img height="25px" src={profile}/>
              <p>Profile</p>
            </div>
          </div>
        </div>
    )
}

export default Header;
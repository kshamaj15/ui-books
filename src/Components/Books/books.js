import React from 'react';
import './books.scss';
import  Star from '../Star/star';
import  book from '../../Assets/b4.jpeg';

const Books = props => {


    const bclicked = (val, flag) => {
        if(val === 'cart') {
            props.isAdded = flag;
        } else {
            props.isWished = flag;
        }
    };

    const cart = props.isAdded ? 
    <button className="btn btn-info btn-sm"  onClick={() => props.bclicked('cart', false)}>Added To cart</button> :
    <button className="btn btn-outline-info btn-sm"  onClick={() => props.bclicked('cart', true)}>Add To cart</button> ;

    const wish = props.isWished ? 
    <button className="btn btn-warning btn-sm"  onClick={() => props.bclicked('wish', false)}>WishListed</button> :
    <button className="btn btn-outline-warning btn-sm"  onClick={() => props.bclicked('wish', true)}>WishList</button> ;


    return(
        <div className = "book">
            <div class="image">
                <img src={book}/>
            </div>
            <div class="details">
                <h5>{props.title}</h5>
                <h5>{props.author}</h5>
            <p>Rating: {props.rating}</p>
            <Star count = {props.rating}></Star>
            <p>MRP: {props.price}</p>
            {cart}
            {wish}
            </div>
        </div>
    )
}

export default Books;
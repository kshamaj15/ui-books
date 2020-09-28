import React from 'react';
import './books.scss';
import  Star from '../Star/star';
import  book from '../../Assets/b4.jpeg';

const Books = props =>{

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
            <button className="btn btn-info"  onClick={props.bclicked}>Add To cart</button> 
            </div>
        </div>
    )
}

export default Books;
import React from 'react'
import './books.css'
import  Star from '../Star/star'

const Books = props =>{

    return(
        <div className = "book">
            <h4>{props.title}</h4>
            <p>by</p>
            <h5>{props.author}</h5>
            <p>Rating: {props.rating}</p>
            <Star count = {props.rating}></Star>
            <p>MRP: {props.price}</p>
            <button className="btn btn-info"  onClick={props.bclicked}>Add To cart</button>
        </div>
    )
}

export default Books;
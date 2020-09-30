import React, { Component } from 'react';
import './App.scss';
import Books from '../Components/Books/books';
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';

class App extends Component {


    state = {
        books: [
            {
                "bookID": 40081,
                "title": "The Meanest Doll in the World (Doll People  #2)",
                "authors": "Ann M. Martin-Laura Godwin-Brian Selznick",
                "average_rating": 3.96,
                "isbn": 786852976,
                "language_code": "en-GB",
                "ratings_count": 5582,
                "price": 2094
              },
              {
                "bookID": 40086,
                "title": "Suite Francaise",
                "authors": "Irène Némirovsky-Sandra Smith",
                "average_rating": 3.83,
                "isbn": 1400044731,
                "language_code": "eng",
                "ratings_count": 994,
                "price": 2095
              },
              {
                "bookID": 40090,
                "title": "Sacred Games (Sacred Games)",
                "authors": "Vikram Chandra",
                "average_rating": 3.93,
                "isbn": 61130354,
                "language_code": "eng",
                "ratings_count": 5589,
                "price": 2096
              },
              {
                "bookID": 40100,
                "title": "Riding the Bus with My Sister: A True Life Journey",
                "authors": "Rachel Simon",
                "average_rating": 3.75,
                "isbn": 452284554,
                "language_code": "eng",
                "ratings_count": 5020,
                "price": 2097
              },
              {
                "bookID": 40102,
                "title": "Blink: The Power of Thinking Without Thinking",
                "authors": "Malcolm Gladwell",
                "average_rating": 3.92,
                "isbn": 316010669,
                "language_code": "eng",
                "ratings_count": 410968,
                "price": 2098
              },
              {
                "bookID": 40106,
                "title": "Beatrice's Goat",
                "authors": "Page McBrier-Lori Lohstoeter-Hillary Rodham Clinton",
                "average_rating": 4.24,
                "isbn": 689869908,
                "language_code": "eng",
                "ratings_count": 523,
                "price": 2099
              },
              {
                "bookID": 40117,
                "title": "The Unconsoled",
                "authors": "Kazuo Ishiguro",
                "average_rating": 3.53,
                "isbn": "057122539X",
                "language_code": "eng",
                "ratings_count": 7083,
                "price": 2100
              },
              {
                "bookID": 40127,
                "title": "Leonardo's Swans",
                "authors": "Karen Essex",
                "average_rating": 3.71,
                "isbn": 767923065,
                "language_code": "eng",
                "ratings_count": 5388,
                "price": 2101
              },
              {
                "bookID": 40128,
                "title": "The Notebooks of Leonardo da Vinci",
                "authors": "Leonardo da Vinci-Irma A. Richter",
                "average_rating": 3.92,
                "isbn": 192838970,
                "language_code": "eng",
                "ratings_count": 67,
                "price": 2102
              },
              {
                "bookID": 40130,
                "title": "Leonardo da Vinci: Obra pictorica completa y obra grafica",
                "authors": "Frank Zöllner-Johannes Nathan-Frank Zöllner",
                "average_rating": 4.26,
                "isbn": 3822817341,
                "language_code": "spa",
                "ratings_count": 54,
                "price": 2103
              }
        ],
        filterbooks: [
          {
              "bookID": 40081,
              "title": "The Meanest Doll in the World (Doll People  #2)",
              "authors": "Ann M. Martin-Laura Godwin-Brian Selznick",
              "average_rating": 3.96,
              "isbn": 786852976,
              "language_code": "en-GB",
              "ratings_count": 5582,
              "price": 2094
            },
            {
              "bookID": 40086,
              "title": "Suite Francaise",
              "authors": "Irène Némirovsky-Sandra Smith",
              "average_rating": 3.83,
              "isbn": 1400044731,
              "language_code": "eng",
              "ratings_count": 994,
              "price": 2095
            },
            {
              "bookID": 40090,
              "title": "Sacred Games (Sacred Games)",
              "authors": "Vikram Chandra",
              "average_rating": 3.93,
              "isbn": 61130354,
              "language_code": "eng",
              "ratings_count": 5589,
              "price": 2096
            },
            {
              "bookID": 40100,
              "title": "Riding the Bus with My Sister: A True Life Journey",
              "authors": "Rachel Simon",
              "average_rating": 3.75,
              "isbn": 452284554,
              "language_code": "eng",
              "ratings_count": 5020,
              "price": 2097
            },
            {
              "bookID": 40102,
              "title": "Blink: The Power of Thinking Without Thinking",
              "authors": "Malcolm Gladwell",
              "average_rating": 3.92,
              "isbn": 316010669,
              "language_code": "eng",
              "ratings_count": 410968,
              "price": 2098
            },
            {
              "bookID": 40106,
              "title": "Beatrice's Goat",
              "authors": "Page McBrier-Lori Lohstoeter-Hillary Rodham Clinton",
              "average_rating": 4.24,
              "isbn": 689869908,
              "language_code": "eng",
              "ratings_count": 523,
              "price": 2099
            },
            {
              "bookID": 40117,
              "title": "The Unconsoled",
              "authors": "Kazuo Ishiguro",
              "average_rating": 3.53,
              "isbn": "057122539X",
              "language_code": "eng",
              "ratings_count": 7083,
              "price": 2100
            },
            {
              "bookID": 40127,
              "title": "Leonardo's Swans",
              "authors": "Karen Essex",
              "average_rating": 3.71,
              "isbn": 767923065,
              "language_code": "eng",
              "ratings_count": 5388,
              "price": 2101
            },
            {
              "bookID": 40128,
              "title": "The Notebooks of Leonardo da Vinci",
              "authors": "Leonardo da Vinci-Irma A. Richter",
              "average_rating": 3.92,
              "isbn": 192838970,
              "language_code": "eng",
              "ratings_count": 67,
              "price": 2102
            },
            {
              "bookID": 40130,
              "title": "Leonardo da Vinci: Obra pictorica completa y obra grafica",
              "authors": "Frank Zöllner-Johannes Nathan-Frank Zöllner",
              "average_rating": 4.26,
              "isbn": 3822817341,
              "language_code": "spa",
              "ratings_count": 54,
              "price": 2103
            }
          ],
        itemsInCart:[ ],
        numOfItemsInCart: 0,
        price: 0
    }
    
      sortingHandler = (event) =>{
        console.log(event.target.value)
        if(event.target.value === 'ratings') {
          let sortedBooks = this.state.books.sort((a,b)=>{
            if(a.average_rating>b.average_rating)
            return -1;
            else if(a.average_rating<b.average_rating)
            return 1;
            else
            return 0;
          })
          this.setState({
            filterbooks: sortedBooks
          })
        } else {
          let sortedBooks = this.state.books.sort((a,b)=>{
            if(a.price>b.price)
            return -1;
            else if(a.price<b.price)
            return 1;
            else
            return 0;
          })
          this.setState({
            filterbooks: sortedBooks
          })
        }
      }
    
      addCartHandler = (val, flag) =>{
        console.log(val, flag)
        let value = this.state.numOfItemsInCart+1;
        //let itemsIn = this.state.itemsInCart.push(this.state.books[index])
        this.setState({
          numOfItemsInCart: value
        })
        // let p= this.state.price+book.price;
        // this.setState({
        //   price: p
        // })
      }

      searchHandler = (event) =>{
        //console.log(event.target.value)
        let filterBooks = [...this.state.books].filter((book,index)=>{
          const isMatch = book.title.toLowerCase().includes(event.target.value)
          return isMatch
        })
        console.log(filterBooks)
        this.setState({
          filterbooks: filterBooks
        })
      }
    
      
    
      render(){
        
        
        return (
          <div>
            <Header onInputHandler={this.searchHandler}></Header>
            <div className="d-flex justify-content-between">
              <Sidebar sortHandler={this.sortingHandler}></Sidebar>
            <div className="books">
            {this.state.filterbooks.map(book=>{
              return <Books 
              key = {book.bookID}
              title = {book.title}
              author = {book.authors}
              price = {book.price}
              rating = {book.average_rating}
              bclicked = {this.addCartHandler}
              isAdded = {book.isAdded}
              isWished = {book.isWished}
              // totalPrice = {this.state.price+book.price}
              >
              </Books>
            })}
            </div>
            </div>
          </div>
        );
      }
    }
    
    export default App;
    

// import logo from './logo.svg';
import './App.css';
import Card from '../components/Card';
import React from 'react';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let index = getRandomInt(0, 1000)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote : [],
      author: []
    };
    this.getNext = this.getNext.bind(this)

  }

  componentDidMount(){
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => this.setState({quote : data[index].text, author : data[index].author}))
  }

  getNext() {
    let buttonIndex = getRandomInt(100, 1000)
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => this.setState({quote : data[buttonIndex].text, author : data[buttonIndex].author}))
    console.log(1)
  }



  render() {

    const { quote, author } = this.state;
    if (!quote.length) {
      return (
        <div>
          <h1 style={{textAlign : 'center'}}>Loading</h1>
        </div>
      )
    } else {
        return (
        <div>
          <h1 className="f1 ttu tracked mt0 underline" style={{textAlign : 'center'}}>Quote Generator</h1>
          <Card quote={quote} author={author} newQuote={this.getNext}/>
            <footer className="pv4 ph3 ph5-m ph6-l mid-gray underline">
              <small className="f6 db tc">© 2021 <b class="ttu">Haider Ali</b>., All Rights Reserved</small>
            </footer>
        </div>
        
    
      );
    }
    
  }
}

export default App;

//https://api.chucknorris.io/jokes/random

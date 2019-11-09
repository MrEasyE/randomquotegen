import React from 'react';
import './App.css';

import Quotebox from './components/quotebox';
import Button from './components/button';

const Quotes = [
  {
    quote: 'What a heavy burden is a name that has become too famous.',
    author: 'Voltaire'
  },
  {
    quote: 'If you are a leader, you should never forget that everyone needs encouragement. And everyone who receives it - young or old, successful or... ',
    author: 'John C. Maxwell '
  },
  {
    quote: 'America is known as a country that welcomes people to its shores. All kinds of people. The image of the Statue of Liberty with Emma Lazarus famous... ',
    author: 'Ruth Bader Ginsburg'
  },
  {
    quote: 'To be famous, in fact, one has only to kill ones landlady.',
    author: 'Albert Camus'
  },
  {
    quote: 'I remember debating the finer points of flaky pastry with my chicken-pot-pie-obsessed American dad. I remember the divine mix of Thai food, TV...',
    author: 'Chrissy Teigen'
  },
  {
    quote: 'You might not make it to the top, but if you are doing what you love, there is much more happiness there than being rich or famous.',
    author: 'Tony Hawk'
  },
  {
    quote: 'The nice thing about being a celebrity is that, if you bore people, they think its their fault.',
    author: 'Henry Kissinger '
  },
];

const returnRandom = () => {
  let random = Math.floor(Math.random() * Math.floor(Quotes.length));
  return Quotes[random];
}

const ranNum = () => {
  return Math.floor(Math.random() * Math.floor(255));
}

class App extends React.Component {

  constructor(){
    super();
    this.newquote.bind(this);
  }

  componentDidMount(){
    this.newquote();
  }

  state = {
    color: 'rgb(208,92,154)'
  }

  newquote(){

    const quote = returnRandom();
  
    // get a new quote
    this.setState({
      quote: quote,
    })

    // get a new color
    this.setState(
      this.returnColorObject()
    )

  }

  returnColor() { // give me my rgb string
    let rgb = `rgb(${ranNum()},${ranNum()},${ranNum()})`
    return rgb;
  }

  returnColorObject() { // creating this to push an obj into state
    let obj = {
      color: this.returnColor()
    }

    return obj;
  }

  render(){
    return (
      <div className="App">
        
        <Quotebox color={this.state.color} quote={returnRandom()}/>
        <Button color={this.state.color} newquote={this.newquote.bind(this)}/>

      </div>
    );
  }  
}

export default App;

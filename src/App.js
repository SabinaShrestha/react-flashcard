import React, { Component } from 'react';
import FlashCard from './FlashCard';
import CardForm from './CardForm';


class App extends Component {
  state = { cards: [] }
  addCard = (question, answer) => {
    const {cards} = this.state;
    const card = {question, answer};
    this.setState({cards: [card, ...cards]});
  }

  render(){
    return (
      <div>
        <br />
        <CardForm addCard={this.addCard}/>
        <br />
        <FlashCard />
      </div>
    );
  }
}


export default App;

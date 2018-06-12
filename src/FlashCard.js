import React, {Component} from 'react';



class FlashCard extends Component{
state = {
  cards: [
    {question: 'HTML', answer: 'MarkUp Language'},
    {question: 'React', answer: 'Library'},
    {question: 'SQL', answer: 'Query Language'},
  ]
}

render(){
  const {cards} = this.state
  return(
      <div>
        {
          cards.map(card =>
            <div>{card.question}</div>
          )
        }
      </div>
    )
  }
}



export default FlashCard;

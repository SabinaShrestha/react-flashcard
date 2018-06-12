import React, {Component} from 'react';

class CardForm extends Component{

  state = {question: "", answer: ""}

  handleChange = (e) => {
    this.setState({question: e.target.value});
  }

  handleAnswerChange = (e) => {
    this.setState({answer: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.question);
    this.setState({question: '', answer: ''});
  }

  render(){
    const {question, answer} = this.state;

    return(
      <form>
        <input value={question}
          name="question"
          onChange={this.handleChange}
          required
          placeholder="Question" />

        <input value={answer}
          name="answer"
          onChange={this.handleAnswerChange}
          required
          placeholder="Answer"  />

        <button onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
}

export default CardForm;

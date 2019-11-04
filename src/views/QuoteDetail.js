import React, { Component } from 'react';
import '../index.css';
import quoteService from '../services/quoteService';
// import logo from '../logo.png';

class QuoteCard extends Component {
  state = {
    quote: {},
  };

  async componentDidMount() {
    try {
      const quote = await quoteService.getQuote(this.props.match.params.id);
      this.setState({
        quote,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="role-img-detail">
        <div className="home-features">
          <span>aha! Moment</span>
        </div>

        <div className="style-card-detail">
          <p>{quote.text}</p>
          <div className="style-card-info">
            <p>{quote.date}</p>
            <p>{quote.location}</p>
            <p>{quote.theme}</p>
          </div>
          <div className="section-boton">
            <button className="btn2">DISLIKE</button>
            <button className="btn3">LIKE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteCard;

import React from "react";
import Card from "./Card";
import "./List.css";

export default class List extends React.Component {

  static defaultProps = {
    key: '',
    header: '',
    cards: [],
    onClickAdd: () => {},
  };

  render() {
    // NOTE: 'key' in <Card key={card.id} /> is problematic special prop, thus requiring the addition of <Card key={card.id} id={card.id} />
    // see: https://reactjs.org/warnings/special-props.html
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card) =>  
            <Card 
              key={card.id}
              id={card.id} // see NOTE
              title={card.title}
              content={card.content}
              onClickDelete={this.props.onClickDelete}
            />
          )}
          <button 
            onClick={() => this.props.onClickAdd(this.props.id)}
            type="button" 
            className="List-add-button"
          >
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}
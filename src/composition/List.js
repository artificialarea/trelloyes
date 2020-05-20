import React from "react";
import Card from "./Card";
import "./List.css";


class List extends React.Component {

  static defaultProps = {
    key: '',
    header: '',
    cards: [],
  };

  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card) =>  
            <Card 
              key={card.id}
              id={card.id} // req, see: https://reactjs.org/warnings/special-props.html
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

export default List;
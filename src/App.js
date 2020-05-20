import React, { Component } from 'react';
import List from './composition/List';
import STORE from './STORE';
import './App.css';

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}


class App extends React.Component {

  state = {
    store: STORE,
  }

  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };


  handleDeleteCard = (cardId) => {
    const lists = this.state.store.lists;
    const allCards = this.state.store.allCards;

    console.log('handleDeleteCard ', {cardId})
    const newLists = lists.map(list => ({...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    console.log(newLists);
    const newCards = omit(allCards, cardId);
    console.log(newCards);

    this.setState({
      store:{
        lists: newLists,
        allCards: newCards,
      }
    })
    
  }

  handleAddCard = (listId) => {
    console.log('handleAddCard ran', {listId})

  }




  render() {
    
    const { store } = this.state;   
    console.log(this.state.store);

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {/* <List /> */}
          {store.lists.map(list => 
            <List 
              key={list.id}
              id={list.id} // req, see: https://reactjs.org/warnings/special-props.html
              header={list.header}
              cards = {list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          )}
        </div>
      </main>
    );
  };
}

export default App;
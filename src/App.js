import React from 'react';
import List from './composition/List';
import STORE from './STORE';
import './App.css';

// fn provided
function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}
// fn provided
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

export default class App extends React.Component {

  state = {
    store: STORE,
  }

  // handleDeleteCard = (cardId) => {
  //   const { lists, allCards } = this.state.store;
  //   // ^^ destructuring object, equivalent to:
  //   // const lists = this.state.store.lists;
  //   // const allCards = this.state.store.allCards;

  //   const newLists = lists.map(list => ({
  //     ...list,
  //     cardIds: list.cardIds.filter(id => id !== cardId),
  //   }));
  //   const newCards = omit(allCards, cardId);

  //   this.setState({
  //     store:{
  //       lists: newLists,
  //       allCards: newCards,
  //     }
  //   })
  // };

  handleAddCard = (listId) => {
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list =>{
      if(listId === list.id){
        return {
          ...list, 
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store:{
        lists: newLists,
        allCards: {
          ...this.state.store.allCards, 
          [newCard.id] : newCard},
      }
    })
  };

  render() {
    const { store } = this.state;   

    // NOTE: 'key' in <List key={list.id} /> is problematic special prop, thus requiring the addition of <List key={list.id} id={list.id} />
    // see: https://reactjs.org/warnings/special-props.html
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => 
            <List 
              key={list.id}
              id={list.id} // see NOTE
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
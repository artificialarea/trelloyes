import React, { Component } from 'react';
import List from './composition/List';
import STORE from './STORE';
import './App.css';


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

  handleDeleteCard = () => {
    console.log('handleDeleteCard ran')
  }

  handleAddCard = () => {
    console.log('handleAddCard ran')
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
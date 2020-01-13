import React from 'react';
import '../stylesheets/App.scss';
import Api from '../data/Api';
import Pokemon from './Pokemon';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ApiData:Api
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="PageTitle">Mi lista pokemon</h1>
        <PokeList>
        {this.state.ApiData.map((data, id) => {
          return <Pokemon
          key = {id}
          pokemon = {data}
          />
        })}
        </PokeList>
      </div>
    );
  }
}
export default App;

import React from 'react';
import './App.scss';
import Api from './data/Api';
import Pokemon from './components/Pokemon';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ApiData:Api
    };
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="PageTitle">Mi lista pokemon</h1>
        <PokeList>
        {this.state.ApiData.map((data, key) => {
          return <Pokemon
          key = {key}
          pokemon = {data}
          />
        })}
        </PokeList>
      </div>
    );
  }
}
// render() {
  // return (
  //   <div>
  //     <PokeList>
  //       {this.state.api.map((ap, key) => {
  //         return <Pokemon
  //           key={key}
  //           pokemon={ap}
  //         />
  //       })}
  //     </PokeList>
  //   </div >
  // )

export default App;

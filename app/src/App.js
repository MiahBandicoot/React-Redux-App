import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import initialState from './reducer/reducer'
import './App.css';
import Search from './Search'
import {addPoke} from './reducer/action'

function App(props) {
  // fetch = props
  // useEffect((props)=>{
  //   props.fetch('https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=20/results');
  // },[])
  useEffect(()=>{
    props.addPoke()
  },[])
  return (
    <div className="App">
      <h1 className = 'title'>Poke'Dex</h1>
      {props.pokemon.length>0?(
        <div>
          {props.pokemon.map(item =>{
            return(
            <h2 className = 'Pokem'>{item.name}</h2>
            )
          })}
        </div>
      ):null}
      {props.loader? <h3>Loading</h3>:null}
      {props.error? <h3>Error</h3>:null}
      {/* <Search/> */}
    </div>
  );
}

  const mapStateToProps = (state=initialState) =>{
    return{
      pokemon:state.pokemon,
      loader:state.loader,
      error:state.error,
    }
  }

export default connect(mapStateToProps,{addPoke})(App);

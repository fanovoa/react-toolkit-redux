import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {pokemons =[], isLoading, page } = useSelector( state => state.pokemons);

  useEffect(() => {
  
    dispatch( getPokemons() );
  }, []);
  

  return (
    <>
        <h1>Pokemon</h1>
        <hr />

        <span>Loading: {isLoading ? 'True' :'False'}</span>
        <ul>
            
            {
              pokemons.map( ({ name }) => (

              <li key={name}>{name}</li>

            ))}
        </ul>

        <button
            disabled = { isLoading}
            onClick={ () =>  dispatch(getPokemons( page ))}
        >
          Next
        </button>
    </>
  )
}

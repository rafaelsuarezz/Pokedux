import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Searcher } from './components/searcher';
import { PokemonList } from './components/PokemonList';
import { fetchPokemonsWhithDtails } from './slices/dataSlice';
import logo from './Statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);


  const loading = useSelector((state) => state.ui.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWhithDtails())
  }, [dispatch]);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
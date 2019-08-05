import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.inLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <hi>Counter {counter}</hi>
      <button style={{backgroundColor: '#00FFFF'}} onClick={() => dispatch(increment())}>+</button>
      <button style={{backgroundColor: '#FF7F50'}} onClick={() => dispatch(decrement())}>-</button>
     {isLogged ? <h3>Not Logged In</h3> : ''} 
    </div>
  );
}

export default App;

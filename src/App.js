import './App.css';
import {useDispatch , useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state=>state.counter));
  const  show = useSelector(state => state.showCounter);
  const toggleCounterHandler = () =>{
    dispatch({ type:"toggle" });
  };
  return (
    <div className="App">    
      <h2>Redux Counter</h2>
       {show && <h1>{counter}</h1>}
      
        <button onClick={ () => dispatch({type:"increment"})}>increment</button>
        <button onClick={ () => dispatch({type:"decrement"})}>decrement</button>
        <button onClick={() => dispatch({type:"plusFive",payload:5})}>plusFive</button>
        <div>
          <button onClick={toggleCounterHandler}>Toogle Counter</button>
        </div>
        
    </div>
  );
}

export default App;

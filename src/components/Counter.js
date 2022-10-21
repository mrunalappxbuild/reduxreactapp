import {useDispatch , useSelector} from 'react-redux';
import {counterActions} from '../store/counterSlice';

const Counter = () =>{

 const dispatch = useDispatch();
  const counter = useSelector((state) =>state.counter.counter);
  const  show = useSelector((state) => state.counter.showCounter);

  const incrementCounterHandler = () =>{
    dispatch(counterActions.increment());
  };

  const decrementCounterHandler = () =>{
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () =>{
    dispatch(counterActions.toggleCounter());
  };

  const plusFiveCounterHandler = () =>{
    dispatch(counterActions.plusFive(5))
  };
  return (
    <div className="App">    
      <h2>Redux Counter</h2>
       {show && <h1>{counter}</h1>}
      
        <button onClick={incrementCounterHandler }>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
        <button onClick={plusFiveCounterHandler}>plusFive</button>
        <div>
          <button onClick={toggleCounterHandler}>Toogle Counter</button>
        </div>
        
    </div>
  );
}
//     const toggleCounterHandler = () => {};

// return (
//     <main className={classes.counter}>
//         <h1>Redux Countere</h1>
//         <div className={classes.value}>--Counter Value</div>
//         <button onclick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
// );
// };

export default Counter;
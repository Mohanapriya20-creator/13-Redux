import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';


const Counter = () => {
  const dispatch = useDispatch();
  //useSelector automatically subscribes to the Redux store and reads the counter value from the state
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({ type: 'Increment' });
  // }
  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  }
  // const decrementHandler = () => {
  //   dispatch({ type: 'Decrement' });
  // }

  //redux will create an action object with the type 'Increment' and payload with value 10 and dispatch it to the store
  //{type: 'SOME_UNIQUE_VALUE', amount: 10}
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
   dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle</button>

      </div>
    </main>
  );
};

export default Counter;

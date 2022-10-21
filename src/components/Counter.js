// import classes from './Counter.module.css';
const Counter = () =>{
    const toggleCounterHandler = () => {};

return (
    <main className={classes.counter}>
        <h1>Redux Countere</h1>
        <div className={classes.value}>--Counter Value</div>
        <button onclick={toggleCounterHandler}>Toggle Counter</button>
    </main>
);
};

export default Counter;
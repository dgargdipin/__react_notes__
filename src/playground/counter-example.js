let count = 0;
// const someId='some-id'
const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne', count);
    renderCounterApp();
};
const resetfn = () => {
    count = 0;
    console.log('reset', count);
    renderCounterApp();
};
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetfn}>reset</button>
        </div>


    );
    var appRoot = document.getElementById('app');
    ReactDOM.render(templateTwo, appRoot)
}
renderCounterApp();
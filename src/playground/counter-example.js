
class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count,
            name: 'DIpin'
        };

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log('AddOne')
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
        console.log('MinusOne')
    }
    handleReset() {
        this.setState(()=>{
            return {count:0};
        })
        console.log('Reset')
    }

    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )

    }
}
CounterApp.defaultProps={
    count:10
}

var appRoot = document.getElementById('app');
ReactDOM.render(<CounterApp />, appRoot)

// let count = 0;
// // const someId='some-id'
// const addOne = () => {
//     count++;
//     console.log('addOne', count);
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     console.log('minusOne', count);
//     renderCounterApp();
// };
// const resetfn = () => {
//     count = 0;
//     console.log('reset', count);
//     renderCounterApp();
// };
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>
//                 Count: {count}
//             </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetfn}>reset</button>
//         </div>


//     );
    // var appRoot = document.getElementById('app');
//     ReactDOM.render(templateTwo, appRoot)
// }
// // renderCounterApp();
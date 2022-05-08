'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
    _inherits(CounterApp, _React$Component);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: props.count,
            name: 'DIpin'
        };

        return _this;
    }

    _createClass(CounterApp, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            console.log('AddOne');
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
            console.log('MinusOne');
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return { count: 0 };
            });
            console.log('Reset');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.name,
                React.createElement(
                    'h1',
                    null,
                    'Count:',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

CounterApp.defaultProps = {
    count: 10
};

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(CounterApp, { count: 0 }), appRoot);

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

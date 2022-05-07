"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibleApp = function (_React$Component) {
    _inherits(VisibleApp, _React$Component);

    function VisibleApp(props) {
        _classCallCheck(this, VisibleApp);

        var _this = _possibleConstructorReturn(this, (VisibleApp.__proto__ || Object.getPrototypeOf(VisibleApp)).call(this, props));

        _this.toggleShow = _this.toggleShow.bind(_this);
        _this.state = {
            show: true
        };
        return _this;
    }

    _createClass(VisibleApp, [{
        key: "toggleShow",
        value: function toggleShow() {
            this.setState(function (prevState) {
                return {
                    show: !prevState.show
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visible toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.toggleShow },
                    "Toggle"
                ),
                this.state.show && React.createElement(
                    "p",
                    null,
                    "Text to hide/show"
                )
            );
        }
    }]);

    return VisibleApp;
}(React.Component);

ReactDOM.render(React.createElement(VisibleApp, null), document.getElementById("app"));

// let show=true;

// const changeVisible=()=>{
//     show=!show;
//     render();
// }

// const render=()=>{
//     var template = (
//         <div>
//             <h1>Visible toggle</h1>
//             <button onClick={changeVisible}>{show ? 'Hide' : 'Show'}</button>
//             {show && <p>Text to hide/show</p>}
//         </div>
//     );


//     const root = document.getElementById("app")
//     ReactDOM.render(template, root);

// }

// render();

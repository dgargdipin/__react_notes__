'use strict';

var show = true;

var changeVisible = function changeVisible() {
    show = !show;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visible toggle'
        ),
        React.createElement(
            'button',
            { onClick: changeVisible },
            show ? 'Hide' : 'Show'
        ),
        show && React.createElement(
            'p',
            null,
            'Text to hide/show'
        )
    );

    var root = document.getElementById("app");
    ReactDOM.render(template, root);
};

render();

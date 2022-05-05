'use strict';

console.log("App.js is running");
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is jsx from app.js changesss'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var username = 'Mike';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        username + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age:21'
    ),
    React.createElement(
        'p',
        null,
        'Location:India'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

'use strict';

console.log("App.js is running");
var appInfo = {
    heading: 'Hi',
    subtitle: 'subssssss',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appInfo.heading
    ),
    appInfo.subtitle && React.createElement(
        'p',
        null,
        appInfo.subtitle
    ),
    React.createElement(
        'p',
        null,
        appInfo.options.length > 0 ? "Here are your options" : "No options"
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
var user = {
    name: 'Dip in',
    age: 26,
    location: "India"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
}
var count = 0;
// const someId='some-id'
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var resetfn = function resetfn() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetfn },
        'reset'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

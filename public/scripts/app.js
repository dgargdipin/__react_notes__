'use strict';

console.log("App.js is running");
var appInfo = {
    heading: 'Hi',
    subtitle: 'subssssss'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appInfo.heading
    ),
    React.createElement(
        'p',
        null,
        appInfo.subtitle
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
    name: 'Dipin',
    age: 26,
    location: "India"
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'unknown';
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location:',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

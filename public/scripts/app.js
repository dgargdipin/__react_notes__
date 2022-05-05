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
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

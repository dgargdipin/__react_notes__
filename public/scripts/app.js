"use strict";

console.log("App.js is running");
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is jsx from app.js changesss"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);
var user = {
    name: 'Dipin',
    age: 26,
    location: "India"
};
var username = 'Mike';
var userAge = 27;
var userLocation = 'India';
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age:",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location:",
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

'use strict';

console.log("App.js is running");
var appInfo = {
    heading: 'Hi',
    subtitle: 'subssssss',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    var option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log(appInfo.options);
    renderTemplate();
};
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

var appRoot = document.getElementById('app');
var removeOptions = function removeOptions() {
    appInfo.options = [];
    renderTemplate();
};
var renderTemplate = function renderTemplate() {
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
            'p',
            null,
            appInfo.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove all options'
        ),
        [1, 2, 3, 4, 'Dipin Garg', null, undefined, true],
        [React.createElement(
            'p',
            { key: 'a' },
            'a'
        ), React.createElement(
            'p',
            { key: 'b' },
            'b'
        ), React.createElement(
            'p',
            { key: 'c' },
            'c'
        )],
        appInfo.options.map(function (option, index) {
            return React.createElement(
                'li',
                { key: index },
                option
            );
        }),
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
                'Item Two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderTemplate();

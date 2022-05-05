"use strict";

console.log("App.js is running");
var template = React.createElement(
  "p",
  null,
  "This is jsx from app.js changesss"
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

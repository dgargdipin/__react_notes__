console.log("App.js is running")
var template = (
    <div>
        <h1>This is jsx from app.js changesss</h1>
        <p>This is some info</p>
        <ol>
            <li>
                Item One
            </li>
            <li>
                Item two
            </li>
        </ol>
    </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot)
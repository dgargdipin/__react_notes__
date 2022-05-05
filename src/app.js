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
var username='Mike';
var templateTwo=(
    <div>
        <h1>{username+'!'}</h1>
        <p>Age:21</p>
        <p>Location:India</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot)
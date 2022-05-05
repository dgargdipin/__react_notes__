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
var user={
    name:'Dipin',
    age:26,
    location:"India",
}
var username='Mike';
var userAge=27;
var userLocation='India'
var templateTwo=(
    <div>
        <h1>{user.name}</h1>
        <p>Age:{user.age}</p>
        <p>Location:{user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot)
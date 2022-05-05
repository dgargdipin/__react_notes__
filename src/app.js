console.log("App.js is running")
var appInfo={
    heading:'Hi',
    subtitle:'subssssss',
};
var template = (
    <div>
        <h1>{appInfo.heading}</h1>
        <p>{appInfo.subtitle}</p>
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
};

function getLocation(location){
    if(location){
        return location
    }
    else{
        return 'unknown'
    }
    
}
var templateTwo=(
    <div>
        <h1>{user.name}</h1>
        <p>Age:{user.age}</p>
        <p>Location:{getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot)
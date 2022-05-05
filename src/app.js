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
    name:'Dip in',
    age:26,
    location:"India",
};

function getLocation(location){
    if(location){
        return <p>location: {location}</p>
    }
    
}
var templateTwo=(
    <div>
        <h1>{user.name?user.name:'Anonymous'}</h1>
        { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot)
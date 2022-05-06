console.log("App.js is running")
var appInfo={
    heading:'Hi',
    subtitle:'subssssss',
    options:['One','Two']
};
var template = (
    <div>
        <h1>{appInfo.heading}</h1>
        {/* <p>{appInfo.subtitle}</p> */}
        {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
        <p>{appInfo.options.length > 0 ? "Here are your options": "No options"}</p>
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
let count=0;
// const someId='some-id'
const addOne=()=>{
    console.log('addOne');
};
const minusOne=()=>{
    console.log('minusOne');
};
const resetfn=()=>{
    console.log('reset');
};
const templateTwo=(
    <div>
        <h1>
            Count: {count}
        </h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetfn}>reset</button>
    </div>


);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot)
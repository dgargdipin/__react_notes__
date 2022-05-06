console.log("App.js is running")
var appInfo={
    heading:'Hi',
    subtitle:'subssssss',
    options:[]
};
const onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
    const option=e.target.elements.option.value;

    if(option){
        appInfo.options.push(option);
        e.target.elements.option.value='';
    }
    console.log(appInfo.options);
    renderTemplate();


}
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

var appRoot = document.getElementById('app');
const removeOptions=()=>{
    appInfo.options=[];
    renderTemplate();
}
const renderTemplate=()=>{
    var template = (
        <div>
            <h1>{appInfo.heading}</h1>
            {/* <p>{appInfo.subtitle}</p> */}
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{appInfo.options.length}</p>
            <button onClick={removeOptions}>Remove all options</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
    
}
renderTemplate();
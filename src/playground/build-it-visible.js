let show=true;

const changeVisible=()=>{
    show=!show;
    render();
}

const render=()=>{
    var template = (
        <div>
            <h1>Visible toggle</h1>
            <button onClick={changeVisible}>{show ? 'Hide' : 'Show'}</button>
            {show && <p>Text to hide/show</p>}
        </div>
    );


    const root = document.getElementById("app")
    ReactDOM.render(template, root);

}

render();
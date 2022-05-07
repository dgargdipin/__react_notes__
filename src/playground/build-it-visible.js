class VisibleApp extends React.Component{
    constructor(props){
        super(props);
        this.toggleShow=this.toggleShow.bind(this);
        this.state={
            show:true
        };
    }
    toggleShow(){
        this.setState((prevState)=>{
            return {
                show:!prevState.show
            };
        });

    }
    render(){
        return (
            <div>
                <h1>Visible toggle</h1>
                <button onClick={this.toggleShow}>Toggle</button>
                {this.state.show && <p>Text to hide/show</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibleApp />, document.getElementById("app"))


// let show=true;

// const changeVisible=()=>{
//     show=!show;
//     render();
// }

// const render=()=>{
//     var template = (
//         <div>
//             <h1>Visible toggle</h1>
//             <button onClick={changeVisible}>{show ? 'Hide' : 'Show'}</button>
//             {show && <p>Text to hide/show</p>}
//         </div>
//     );


//     const root = document.getElementById("app")
//     ReactDOM.render(template, root);

// }

// render();
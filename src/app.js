class IndecisionApp extends React.Component{
    render(){
        const title="Indecision";
        const jsx = (
            <div>
                <Header title={title} />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
        return jsx;

    }
}
class Header extends React.Component{
    render(){
        
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>Subtitle</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>
                    What Should I do?
                </button>
            </div>
        )
    }
}
class Options extends React.Component{
    render(){
        return (
            <div>
                Options component here
                <Option/>
            </div>
        )
    }
}
class AddOption extends React.Component{
    render(){
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option Component Here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
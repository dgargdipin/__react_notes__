class IndecisionApp extends React.Component{
    render(){
        const title="Indecision";
        const subtitle ="Put your life in the hands of a computer";
        const options=["thing one","thing two","thing two"];
        const jsx = (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>
                    What Should I do?
                </button>
            </div>
        )
    }
}
class Options extends React.Component{
    handleRemoveAll(){
        console.log(this)
        alert('handleRemoveAll');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {this.props.options.map((item)=><Option key={item} optionText={item}/>)}
            </div>
        )
    }
}
class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const submitted = e.target.elements.option.value.trim()
        if(submitted){
            e.target.elements.option.value = ''
            alert(submitted)
        }
    }
    render(){
        return (
            <div>
                AddOption component here
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
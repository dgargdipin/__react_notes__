const obj={
    name:'Dipin',
    getName(){
        return this.name;
    }
}
console.log(obj.getName())
// const getName=obj.getName;
// console.log(getName())
const getName=obj.getName.bind(obj);
console.log(getName())
const getName2=obj.getName.bind({name:'DIpin23'});
console.log(getName2())

class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.addOptionHandle = this.addOptionHandle.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.state={
            options:[]
        };
    }
    addOptionHandle(option){
        if (!option.trim()) {
            return 'Enter valid option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Task already exists'
        }
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat([option])
            }

        })
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            };
        })
    }
    handleAction(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render(){
        const title="Indecision";
        const subtitle ="Put your life in the hands of a computer";
        
        const jsx = (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length>0} 
                    handleAction={this.handleAction}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}

                />
                <AddOption addOptionHandle={this.addOptionHandle}/>
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
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handleAction}
                disabled={!this.props.hasOptions}
                >
                    What Should I do?
                </button>
            </div>
        )
    }
}
class Options extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {this.props.options.map((item)=><Option key={item} optionText={item}/>)}
            </div>
        )
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }

    }
    handleAddOption(e){
        e.preventDefault();
        const submitted = e.target.elements.option.value
        const error=this.props.addOptionHandle(submitted)
        this.setState(()=>{
            return {error};
        });
        e.target.elements.option.value=''

        
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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
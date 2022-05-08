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
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.state={
            options:props.options
        };
        console.log('Indecision constructor fired')
    }
    componentDidMount(){
        console.log('Indecision component mounted')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Indecision component updated')
    }
    componentWillUnmount(){
        console.log('Indecision component wil unmount')
    }
    addOptionHandle(option){
        if (!option.trim()) {
            return 'Enter valid option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Task already exists'
        }
        this.setState((prevState)=>({options:prevState.options.concat([option])}))
    }
    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption(optionIdx){
        this.setState((prevState) => ({ 
            options: prevState.options.filter((_, index) => optionIdx!=index)
        }));
    }
    handleAction(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render(){
        const subtitle ="Put your life in the hands of a computer";
        
        const jsx = (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length>0} 
                    handleAction={this.handleAction}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOption addOptionHandle={this.addOptionHandle}/>
            </div>
        )
        return jsx;

    }
}
IndecisionApp.defaultProps={
    options:[]
}
const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps={
    title:'Indecision'
}

const Action=(props)=>{
    return (
        <div>
            <button
                onClick={props.handleAction}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    )
}
const Options=(props)=>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.map((item, index) => <Option key={index} optionText={item} index={index} handleDeleteOption={props.handleDeleteOption} />)}
        </div>
    )
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
        this.setState(()=>({error}));
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
const Option=(props)=>{
    return (
        <div>
            Option: {props.optionText}
            <button onClick={(e) => { props.handleDeleteOption(props.index)}}>Delete</button>
        </div>
    );

}

// const User=(props)=>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
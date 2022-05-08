import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.addOptionHandle = this.addOptionHandle.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        };
        console.log('Indecision constructor fired')
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            if (json) {
                const options = JSON.parse(json)
                this.setState(() => ({ options }))
            }
        }
        catch (e) {

        }


    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length != prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Indecision component updated')
        }
    }
    componentWillUnmount() {
        console.log('Indecision component wil unmount')
    }
    addOptionHandle(option) {
        if (!option.trim()) {
            return 'Enter valid option'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Task already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionIdx) {
        this.setState((prevState) => ({
            options: prevState.options.filter((_, index) => optionIdx != index)
        }));
    }
    handleAction() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render() {
        const subtitle = "Put your life in the hands of a computer";

        const jsx = (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleAction={this.handleAction}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOption addOptionHandle={this.addOptionHandle} />
            </div>
        )
        return jsx;

    }
}
export default IndecisionApp;
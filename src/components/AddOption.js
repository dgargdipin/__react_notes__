import React from 'react'

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }

    }
    handleAddOption(e) {
        e.preventDefault();
        const submitted = e.target.elements.option.value
        const error = this.props.addOptionHandle(submitted)
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = ''
        }


    }
    render() {
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
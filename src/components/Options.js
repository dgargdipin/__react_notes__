import Option from "./Option";
import React from 'react'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((item, index) => <Option key={index} optionText={item} index={index} handleDeleteOption={props.handleDeleteOption} />)}
        </div>
    )
}
export default Options;
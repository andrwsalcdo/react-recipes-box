import React from 'react';

const Form = (props) => (
     <div className="form-group">
        <label className="control-label">{props.label}</label>
        <input type="text" className="form-control"
        value={props.value} onChange={props.onChange}
        placeholder={props.placeholderText}/>
    </div>
)

export default Form; 
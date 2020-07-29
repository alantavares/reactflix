import React from 'react';

function FormField({ value, onChange, name, type, label }) {

    const input = <input
        type={type}                
        name={name}
        value={value}
        onChange={onChange}
    />

    const textArea = <textarea 
        name={name}
        onChange={onChange}
        defaultValue={value}
    />
    

    return (
        <div>
            <label>
            {label}
            {type === 'textarea' ? textArea : input}
            </label>
        </div>
    );
}

export default FormField;
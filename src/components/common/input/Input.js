import React from 'react';

const Input = ({type, id, className, placeholder, isRequired}) => {
    return (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholder}
            required={isRequired}
        />
    )
}

export default Input;
import React from 'react';
import './Input.scss';

const Input = ({className = '', ...rest}) => (
	<input {...rest} className={`input ${className}`}/>
);

export default Input;
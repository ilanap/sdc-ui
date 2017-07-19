import React from 'react';
import SVGIcon from './SVGIcon.js';

const Button = (props) => {
	let {btnType = 'default', color = 'primary', onClick, disabled, className, iconName, iconSize = 'small', children, ...other} = props;
	return (
		<button onClick={onClick}
		        className={`sdc-button sdc-button-${btnType} sdc-button__${color} ${className || ''} ${iconName ? 'sdc-button__with-icon' : ''}`}
		        disabled={disabled} {...other}>
			{iconName && <SVGIcon className='sdc-button-icon' name={iconName} size={iconSize}/>}
			<div className='sdc-button-label'>{children}</div>
		</button>
	);
};

export default Button;

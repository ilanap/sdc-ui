import React, {PropTypes} from 'react';
import iconMap from './utils/iconMap.js';

const SVGIcon = ({name, onClick, label, className, iconClassName, labelClassName, labelPosition, size, color, disabled, ...other}) => {

	let colorClass = (color !== '') ? '__'+color : '';
	let classes = `svg-icon-wrapper ${name} ${iconClassName} ${className} ${colorClass} ${onClick ? 'clickable' : ''} ${disabled ? 'disabled' : ''} ${labelPosition}`;
	let camelCasedName = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	let IconComponent = iconMap[camelCasedName];

	return (
		<div {...other} onClick={onClick} className={classes}>
			<IconComponent className={`svg-icon svg-icon--${size}`} />
			{label && <span className={`svg-icon-label ${labelClassName}`}>{label}</span>}
		</div>
	);

};

SVGIcon.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	labelPosition: PropTypes.string,
	className: PropTypes.string,
	iconClassName: PropTypes.string,
	labelClassName: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	disabled: PropTypes.boolean
};

SVGIcon.defaultProps = {
	name: '',
	label: '',
	className: '',
	iconClassName: '',
	labelClassName: '',
	labelPosition: 'bottom',
	size: 'large',
	color: '',
	disabled: false
};

export default SVGIcon;

import React from 'react';
import Examples from './utils/Examples.js';
import SVGIcon from '../src/react/SVGIcon.js';
import HTMLSvgIcon from '../components/icon/svg-icon.html';

const size = [
	'large', 'medium', 'small'
];

const iconLabelPositions = [
	'bottom', 'top', 'left', 'right'
];

const iconColors =[
	'',
	'primary',
	'secondary',
	'positive',
	'negative',
	'warning'
]

const disabled = ['false', 'true'];

function buildExamples(iconName, iconLabel, labelPosition, size, color, disabled) {
	return {
		Example: {
			jsx: <SVGIcon label={iconLabel} labelPosition={labelPosition} iconClassName='storybook-big'
				  color={color} name={iconName} size={size} disabled={disabled === 'true'}/>
		}
	};
}

const SelectOption = ({option, selected}) => {
	return (
		<option key={option} selected={selected} value={option}>{option}</option>
	);
};

const IconTable = ({onClick}) => (
	<div className='icons-table'>
		{ICON_NAMES.map(icon => (
			<div key={icon} className='icon-section'>
				<SVGIcon
					onClick={() => onClick(icon)}
					label={icon}
					iconClassName='storybook-small'
					name={icon}/>
			</div>
		))}
	</div>
);

class Icons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconName: ICON_NAMES[0],
			iconLabel: '',
			labelPosition: iconLabelPositions[0],
			size : size[0],
			color : iconColors[0]
		};
	}

	render() {
		console.log(this.state.iconName);
		return (
			<div className='icons-screen'>
				<h1>Icons</h1>
				<div className='icons-option-selector'>
					<div className='option-container'>
						<label>Icon name:</label>
						<select onChange={e => this.setState({iconName: e.target.value})}>{ICON_NAMES.map(option =>
							<SelectOption option={option} selected={this.state.iconName === option}/>)}</select>
					</div>
					<div className='option-container'>
						<label>Icon label</label>
						<input value={this.state.iconLabel} onChange={e => this.setState({iconLabel: e.target.value})}/>
					</div>
				</div>
				<div className='icons-option-selector'>
					<div className='option-container'>
						<label>Label position</label>
						<select
							onChange={e => this.setState({labelPosition: e.target.value})}>{iconLabelPositions.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
					<div className='option-container'>
						<label>Size</label>
						<select
							onChange={e => this.setState({size: e.target.value})}>{size.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
					<div className='option-container'>
						<label>Color</label>
						<select
							onChange={e => this.setState({color: e.target.value})}>{iconColors.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
					<div className='option-container'>
						<label>Disabled</label>
						<select
							onChange={e => this.setState({disabled: e.target.value})}>{disabled.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
				</div>
				<Examples
					examples={buildExamples(this.state.iconName, this.state.iconLabel, this.state.labelPosition, this.state.size, this.state.color, this.state.disabled)}/>
				<IconTable onClick={icon => this.setState({iconName: icon})} />
			</div>
		);
	};
}

export default Icons;

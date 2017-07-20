import React from 'react';
import Button from '../src/react/Button.js';

import renderer from 'react-test-renderer';

describe('Button', () => {
	test('Button - Default - Primary', () => {
		const button = renderer.create(<Button><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Primary - Disabled', () => {
		const button = renderer.create(<Button disabled><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - White', () => {
		const button = renderer.create(<Button color='white'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Gray', () => {
		const button = renderer.create(<Button color='gray'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Positive', () => {
		const button = renderer.create(<Button color='positive'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Negative', () => {
		const button = renderer.create(<Button color='negative'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Warning', () => {
		const button = renderer.create(<Button color='warning'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Primary', () => {
		const button = renderer.create(<Button btnType='outline'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Gray', () => {
		const button = renderer.create(<Button btnType='outline' color='gray'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Positive', () => {
		const button = renderer.create(<Button btnType='outline' color='positive'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Negative', () => {
		const button = renderer.create(<Button btnType='outline' color='negative'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary', () => {
		const button = renderer.create(<Button btnType='link' color='primary'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary - Disabled', () => {
		const button = renderer.create(<Button btnType='link' color='primary' disabled><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary - With Icon', () => {
		const button = renderer.create(<Button btnType='link' color='primary' iconName='plus'><div className='sdc-button-label'>Click Me</div></Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

});

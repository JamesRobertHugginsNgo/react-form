import React from 'react';

import Form, { TextField, TextAreaField } from './Form';

export default class FormPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			config: {
				id: 'form-id',
				title: 'Form Component',
				sections: [
					{
						id: 'section-1',
						title: 'Section 1',
						rows: [
							{
								id: 'row-1',
								fields: [
									{
										id: 'field-1',
										component: TextField,
										label: 'Text 1',
										helptext: 'This is a text field',
										bindto: 'text-1'
									},
									{
										component: TextField,
										label: 'Text 2',
										helptext: 'This is another text field',
										bindto: 'text-2'
									},
									{
									}
								]
							},
							{
								fields: [
									{
										component: TextAreaField,
										label: 'Textarea',
										bindto: 'textarea'
									}
								]
							}
						]
					},
					{
						id: 'section-2',
						title: 'Section 2'
					},
					{
						id: 'section-3',
						title: 'Section 3'
					}
				],
				updateData: (bindto, value) => {
					this.setState({
						data: {
							...this.state.data,
							[bindto]: value
						}
					})
				}
			},

			data: {}
		};
	}

	render() {
		const { config } = this.state;

		return (
			<div className="container">
				<div className='row'>
					<div className='col'>
						<h1>Form</h1>
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<Form {...config} />
						{JSON.stringify(this.state.data)}
					</div>
				</div>
			</div>
		);
	}
}

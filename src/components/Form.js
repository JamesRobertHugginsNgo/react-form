import PropTypes from 'prop-types';
import React from 'react';

export class TextField extends React.Component {
	render() {
		const {
			id = `textfield-${TextField.idCounter++}`,
			label = 'Unlabelled',
			helptext,
			bindto,
			updateData
		} = this.props;

		return (
			<>
				<label htmlFor={id} className="form-label">{label}</label>
				<input
					type="text"
					className="form-control"
					id={id}
					aria-describedby={helptext ? `${id}-help` : null}
					onChange={bindto && updateData ? (event) => void updateData(bindto, event.target.value) : null}
				/>
				{
					helptext
					? (<div id={`${id}-help`} className="form-text">{helptext}</div>)
					: null
				}
			</>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		helptext: PropTypes.string,
		bindto: PropTypes.string,
		updateData: PropTypes.func
	}

	static idCounter = 0
}

export class NumberField extends React.Component {
	render() {
		const {
			id = `numberfield-${NumberField.idCounter++}`,
			label = 'Unlabelled',
			helptext,
			bindto,
			updateData
		} = this.props;

		return (
			<>
				<label htmlFor={id} className="form-label">{label}</label>
				<input
					type="number"
					className="form-control"	
					id={id}
					aria-describedby={helptext ? `${id}-help` : null}
					onChange={bindto && updateData ? (event) => void updateData(bindto, +event.target.value) : null}
				/>
				{
					helptext
					? (<div id={`${id}-help`} className="form-text">{helptext}</div>)
					: null
				}
			</>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		helptext: PropTypes.string,
		bindto: PropTypes.string,
		updateData: PropTypes.func
	}

	static idCounter = 0
}

export class TextAreaField extends React.Component {
	render() {
		const {
			id = `textareafield-${TextAreaField.idCounter++}`,
			label = 'Unlabelled',
			helptext,
			bindto,
			updateData
		} = this.props;

		return (
			<>
				<label htmlFor={id} className="form-label">{label}</label>
				<textarea
					className="form-control"
					id={id}
					aria-describedby={helptext ? `${id}-help` : null}
					onChange={bindto && updateData ? (event) => void updateData(bindto, event.target.value) : null}
				/>
				{
					helptext
					? (<div id={`${id}-help`} className="form-text">{helptext}</div>)
					: null
				}
			</>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		helptext: PropTypes.string,
		bindto: PropTypes.string,
		updateData: PropTypes.func
	}

	static idCounter = 0
}

class FormField extends React.Component {
	render() {
		const { component = TextField } = this.props;

		return (
			<div className="col mb-3">
				{React.createElement(component, { ...this.props })}
			</div>
		);
	}

	static propTypes = {
		component: PropTypes.func,
	}
}

class FormRow extends React.Component {
	render() {
		const { id, fields = [], updateData } = this.props;

		return (
			<div className='row' id={id}>
				{fields.map((field, index) => (<FormField {...{ updateData, ...field, key: index }} />))}
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape(FormField.propTypes)),
		updateData: PropTypes.func
	}
}

class FormSection extends React.Component {
	render() {
		const { id, title, rows = [], updateData } = this.props;

		return (
			<div className="card mb-3" id={id}>
				{
					title ? (<h3 className="h5 card-header">{title}</h3>)
						: null
				}

				<div className="card-body">
					{rows.map((row, index) => (<FormRow {...{ updateData, ...row, key: index }} />))}
				</div>
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		rows: PropTypes.arrayOf(PropTypes.shape(FormRow.propTypes)),
		updateData: PropTypes.func
	}
}

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.formRef = React.createRef();
	}

	render() {
		const { id, title, sections = [], updateData } = this.props;

		return (
			<form id={id} ref={this.formRef}>
				{typeof title === 'string' ? (<h2>{title}</h2>) : title}
				{sections.map((section, index) => (<FormSection {...{ updateData, ...section, key: index }} />))}
			</form>
		);
	}

	componentDidMount() {
		console.log(this.formRef.current); // ADD FORM VALIDATION
	}

	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		sections: PropTypes.arrayOf(PropTypes.shape(FormSection.propTypes)),
		updateData: PropTypes.func
	}
}

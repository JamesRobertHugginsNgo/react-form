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
			<div className="col mb-3">
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
			</div>
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
		const { id, label = 'Unlabelled', helptext, bindto, updateData } = this.props;

		return (
			<div className="col mb-3">
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
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		helptext: PropTypes.string,
		bindto: PropTypes.string,
		updateData: PropTypes.func
	}
}

class Field extends React.Component {
	render() {
		const { component = TextField } = this.props;

		return React.createElement(component, { ...this.props });
	}

	static propTypes = {
		component: PropTypes.func,
	}
}

class Row extends React.Component {
	render() {
		const { id, fields = [], updateData } = this.props;

		return (
			<div className='row' id={id}>
				{fields.map((field, index) => (<Field {...{ updateData, ...field, key: index }} />))}
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape(Field.propTypes)),
		updateData: PropTypes.func
	}
}

class Section extends React.Component {
	render() {
		const { id, title, rows = [], updateData } = this.props;

		return (
			<div className="card mb-3" id={id}>
				{
					title ? (<h3 className="h5 card-header">{title}</h3>)
						: null
				}

				<div className="card-body">
					{rows.map((row, index) => (<Row {...{ updateData, ...row, key: index }} />))}
				</div>
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		rows: PropTypes.arrayOf(PropTypes.shape(Row.propTypes)),
		updateData: PropTypes.func
	}
}

export default class Form extends React.Component {
	render() {
		const { id, title, sections = [], updateData } = this.props;

		return (
			<form id={id}>
				{typeof title === 'string' ? (<h2>{title}</h2>) : title}
				{sections.map((section, index) => (<Section {...{ updateData, ...section, key: index }} />))}
			</form>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		sections: PropTypes.arrayOf(PropTypes.shape(Section.propTypes)),
		updateData: PropTypes.func
	}
}

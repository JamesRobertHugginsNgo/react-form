import PropTypes from 'prop-types';
import React from 'react';

export default class NumberField extends React.Component {
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

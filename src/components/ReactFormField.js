import PropTypes from 'prop-types'
import React from 'react';

let idCounter = 0;

function ReactFormField({ id = `react-form-field-${idCounter++}`, label = 'No Label' }) {
	return (
		<div className="col pb-3" id={id}>
			<label htmlFor={id} className="form-label">{label}</label>
			<input type="text" className="form-control" id={id} />
		</div>
	);
}

ReactFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string
}

export default ReactFormField;

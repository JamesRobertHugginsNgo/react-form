import PropTypes from 'prop-types'
import React from 'react';

import ReactFormField from './ReactFormField';

function ReactFormRow({ id, fields = [] }) {
	return (
		<div className="row" id={id}>
			{fields.map(({ id, label }) => {
				return (<ReactFormField id={id} label={label}></ReactFormField>) // eslint-disable-line react/jsx-key
			})}
		</div>
	);
}

ReactFormRow.propTypes = {
	id: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.shape(ReactFormField.propTypes))
}

export default ReactFormRow;

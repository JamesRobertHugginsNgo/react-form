import React from 'react';

import InternetCframe from './InternetCframe';
import ReactFormRow from './ReactFormRow';

export default function App() {
	const breadcrumb = [
		{
			text: 'Group',
			link: 'http://www.google.ca/'
		},
		{
			text: 'App'
		}
	];

	const fields = [
		[
			{
				label: 'Label 1'
			},
			{
				label: 'Label 2'
			}
		],
		[
			{
				label: 'Label 3'
			}
		]
	];

	return (
		<InternetCframe breadcrumbs={breadcrumb}>
			<div className="container">
				<ReactFormRow fields={fields[0]}></ReactFormRow>
				<ReactFormRow fields={fields[1]}></ReactFormRow>
			</div>
		</InternetCframe>
	);
}

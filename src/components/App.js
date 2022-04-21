import React from 'react';
import router from 'router/dist/browser/es6-module/router'

import InternetCframe from './InternetCframe';

import HomePage from './HomePage';
import FormPage from './FormPage';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { page: null, breadcrumbs: [] };

		this.router = router([
			{
				regex: /^home$/,
				callback: () => {
					this.setState({
						page: 'home',
						breadcrumbs: [{ text: 'App Name' }]
					})
				}
			},
			{
				regex: /^form$/,
				callback: () => {
					this.setState({
						page: 'form',
						breadcrumbs: [{ text: 'App Name', link: '#home' }, { text: 'Form' }]
					})
				}
			},
			{
				callback: () => {
					this.router.pushRoute('home');
				}
			}
		]);
	}

	render() {
		const { page, breadcrumbs } = this.state;

		return (
			<InternetCframe breadcrumbs={breadcrumbs}>
				{
					page === 'home' ? (<HomePage />)
						: page === 'form' ? (<FormPage />)
							: null
				}
			</InternetCframe>
		);
	}

	componentDidMount() {
		this.router.start();
	}

	componentWillUnmount() {
		this.router.end();
	}
}

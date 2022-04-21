import PropTypes from 'prop-types';
import React from 'react';

import './InternetCframe.scss';

class Breadcrumb extends React.Component {
	render() {
		const { text, link, isactive = false } = this.props;

		const className = ['breadcrumb-item'];
		if (isactive) {
			className.push('active');
		}

		return (
			<li className={className.join(' ')}>
				{link && !isactive ? (<a href={link}>{text}</a>) : text}
			</li>
		);
	}

	static propTypes = {
		text: PropTypes.string.isRequired,
		link: PropTypes.string,
		isactive: PropTypes.bool
	}
}

class Breadcrumbs extends React.Component {
	render() {
		return (
			<ol className="breadcrumb mb-0">
				{
					[
						{
							text: 'City of Toronto',
							link: 'https://www.toronto.ca/'
						},
						...this.props.breadcrumbs
					].map(({ text, link }, index, array) => (
						<Breadcrumb
							text={text}
							link={link}
							isactive={index === array.length - 1}
							key={index}
						/>
					))
				}
			</ol>
		);
	}

	static propTypes = {
		breadcrumbs: PropTypes.arrayOf(PropTypes.shape(Breadcrumb.propTypes)).isRequired
	}
}

export default class InternetCframe extends React.Component {
	render() {
		const { breadcrumbs, children } = this.props;

		return (
			<div className="internet-cframe">
				<header className='pt-3'>
					<div className='container-fluid'>
						HEADER
					</div>

					<nav aria-label="breadcrumb" className='mt-3 py-3'>
						<div className='container-fluid'>
							<Breadcrumbs breadcrumbs={breadcrumbs} />
						</div>
					</nav>
				</header>

				<main className='py-3'>
					<div className='container'>
						{children}
					</div>
				</main>

				<footer className='py-3'>
					<div className='container-fluid'>
						FOOTER
					</div>
				</footer>
			</div>
		);
	}

	static propTypes = {
		breadcrumbs: Breadcrumbs.propTypes.breadcrumbs,
		children: PropTypes.node
	}
}

import PropTypes from 'prop-types'
import React from 'react';

import './InternetCframe.scss';

function InternetCframeBreadcrumbs({ breadcrumbs }) {
	breadcrumbs = [{
		text: 'City of Toronto',
		link: 'https://www.toronto.ca/'
	}, ...breadcrumbs];

	const breadcrumbItems = [];

	const length = breadcrumbs.length;
	const last = length - 1;
	for (let index = 0 ; index < length; index++) {
		const { text, link } = breadcrumbs[index];
		const key = `breadcrumb-${index}`;
		if (index === last) {
			breadcrumbItems.push(<li className="breadcrumb-item active" aria-current="page" key={key}>{text}</li>);
			continue;
		}
		if (link) {
			breadcrumbItems.push(<li className="breadcrumb-item" key={key}><a href={link}>{text}</a></li>);
			continue;
		}
		breadcrumbItems.push(<li className="breadcrumb-item" key={key}>{text}</li>);
	}

	return (
		<ol className="breadcrumb mb-0">
			{breadcrumbItems}
		</ol>
	);
}

InternetCframeBreadcrumbs.propTypes = {
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string
	}))
}

function InternetCframe({ breadcrumbs, children }) {
	return (
		<div className="internet-cframe">
			<header className='mt-3'>
				<div className='container-fluid'>
					HEADER
				</div>

				<nav aria-label="breadcrumb" className='mt-3 py-3'>
					<div className='container-fluid'>
						<InternetCframeBreadcrumbs breadcrumbs={breadcrumbs}></InternetCframeBreadcrumbs>
					</div>
				</nav>
			</header>
			<main className='py-3'>
				<div className='container'>
					{children}
				</div>
			</main>
			<footer className='my-3'>
				<div className='container-fluid'>
					FOOTER
				</div>
			</footer>
		</div>
	);
}

InternetCframe.propTypes = {
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string
	})),
	children: PropTypes.node
}

export default InternetCframe;

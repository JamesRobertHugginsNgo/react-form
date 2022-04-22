import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from './HomePage';
import FormPage from './FormPage';

export default class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/form" element={<FormPage />} />
					<Route path="*" element={<Navigate replace to="/home" />} />
				</Routes>
			</HashRouter>
		);
	}
}

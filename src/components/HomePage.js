import React from 'react';
import { Link } from "react-router-dom";

import InternetCframe from './InternetCframe';

export default class HomePage extends React.Component {
	render() {
		document.title = 'Home - React Form';

		return (
			<InternetCframe breadcrumb={[{ text: 'App' }]}>
				<div className="container">
					<div className='row'>
						<div className='col'>
							<h1>Home</h1>
						</div>
					</div>

					<div className='row'>
						<div className='col-8'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla hendrerit sagittis. Praesent non ante ac ante aliquam dignissim. Morbi elementum, ligula vel pulvinar pharetra, lorem quam sollicitudin est, ut pretium purus ipsum id metus. Nunc euismod eu ante nec volutpat. Curabitur fringilla porta nulla, a vestibulum eros faucibus sollicitudin. Quisque risus leo, commodo eu mauris sit amet, tristique rutrum nulla. Quisque eu quam mauris. Aenean eu magna mollis, maximus odio eget, tincidunt ipsum. Nunc tristique odio sed mi aliquet auctor. Ut consectetur ornare justo, eu ornare ipsum sollicitudin et. Fusce orci diam, lacinia at felis quis, pellentesque cursus nisi.</p>

							<p>Cras pulvinar vestibulum dui, ut consectetur turpis egestas eget. Proin arcu turpis, iaculis sit amet ex ut, bibendum hendrerit nisi. Nulla rutrum dapibus mi faucibus feugiat. Sed mattis nisl eget odio venenatis, a tempor nunc porttitor. Sed lacinia et orci vel hendrerit. Proin eu commodo ipsum. Praesent nulla nulla, varius id lacus eget, condimentum laoreet felis. Phasellus egestas mattis magna, at fringilla justo scelerisque eget. Nam egestas nunc a arcu venenatis consequat. In at magna sollicitudin, sodales sem ut, lobortis nisi. Nulla commodo fringilla vehicula. Integer fringilla viverra neque, quis euismod leo pretium at. Duis dignissim vestibulum arcu. Vestibulum interdum elit nec sem feugiat condimentum. Sed tellus sapien, vestibulum nec pulvinar non, ornare et dolor.</p>

							<p>Fusce dolor libero, feugiat luctus felis ac, sollicitudin tincidunt odio. Aenean porta elit id mauris lacinia bibendum eu vitae erat. Mauris egestas ligula eget libero dictum, vel bibendum libero sodales. Praesent odio libero, lobortis vel nibh id, malesuada mattis velit. Proin eu orci nibh. Ut id odio luctus, placerat tellus ac, posuere urna. Nunc nec porttitor urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor elit libero, sit amet rutrum tortor vulputate id.</p>

							<p>Mauris faucibus id velit in porttitor. Praesent sit amet leo in velit consequat suscipit sit amet non nisl. Nam ut nibh pellentesque, iaculis odio id, feugiat mauris. Duis nisl nisl, vestibulum sit amet ultricies at, ultrices sed mi. Donec tempus in tortor at rhoncus. Vestibulum aliquam imperdiet porttitor. Aliquam tincidunt suscipit nisl, vitae scelerisque ante dapibus non. Pellentesque et tellus porttitor, fermentum lacus eget, posuere mauris. Curabitur efficitur magna at sem tincidunt commodo et id ex. Pellentesque at orci luctus, congue erat ac, maximus sem. In lobortis sit amet enim nec vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sodales est a hendrerit finibus. Duis at pulvinar justo.</p>

							<p>Quisque faucibus vel eros eu sagittis. Nulla lacinia venenatis elit. Curabitur tempor enim blandit maximus commodo. Donec consequat arcu orci, sed auctor velit pulvinar eget. Donec pellentesque vehicula leo, et tincidunt felis ornare tristique. Integer blandit finibus mauris, at sagittis orci lacinia ut. Morbi orci nibh, feugiat quis est at, dignissim tristique elit. Curabitur arcu augue, pharetra sed dignissim nec, ullamcorper eget sem. Proin posuere mi quis ex commodo, sed venenatis orci sollicitudin. Nullam varius venenatis mi vel efficitur. Fusce quam tellus, viverra et vestibulum non, eleifend vel nunc. Maecenas efficitur id tortor ac aliquet. Nam risus orci, sodales sed elit vel, eleifend vestibulum dui. Ut laoreet tempor odio, nec tincidunt ipsum luctus aliquet. Suspendisse molestie fermentum placerat. Phasellus ut rhoncus leo, nec vulputate metus.</p>
						</div>

						<div className='col-4'>
							<div className="card">
								<div className="card-header">
									Menu
								</div>

								<ul className="list-group list-group-flush">
									<Link to="/form" className="list-group-item list-group-item-action">Form</Link>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</InternetCframe>
		);
	}
}

import React from 'react';
import ReactDOM from 'react-dom';
import  { Router, Route, browserHistory } from 'react-router';

// import 'normalize.css';
import style from '../public/index.scss'

// import flexbox from './flexbox.jsx'
import HomeContainer from './HomeContainer.jsx'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={HomeContainer} />
	</Router>,
	document.getElementById('app')
);

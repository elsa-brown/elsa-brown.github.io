import React from 'react';
import ReactDOM from 'react-dom';
import  { Router, Route, browserHistory } from 'react-router';

// import 'normalize.css';
import style from '../public/index.scss'

import Home from './Home.jsx'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
	</Router>,
	document.getElementById('app')
);

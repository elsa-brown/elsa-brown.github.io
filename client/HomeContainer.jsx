import React, { Component } from 'react';

import Home from './Home';
import projects from './projects';

export default class HomeContainer extends Component {
	constructor() {
		super()
		this.state = {
			projects: projects,
		}
	}

	render() {
		return (
			<Home
				projects={this.state.projects}
			/>
		)
	}
}
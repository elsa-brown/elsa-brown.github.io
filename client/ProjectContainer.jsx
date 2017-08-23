import React, { Component } from 'react';

import Project from './Project';
import Description from './Description';

export default class ProjectContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.id,
			project: this.props.project,
			togglePhoto: this.props.togglePhoto,
			descShowing: false,
			photoShowing: false,
			photosOn: this.props.photosOn
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		let id = evt.target.id
		this.state.togglePhoto(id)

		this.setState({
			descShowing: !this.state.descShowing,
			photoShowing: !this.state.descShowing
		})
	}

	render() {
		const project = this.state.project
		const descClass = this.state.descShowing ? 'desc-show' : 'desc'

		return (
			<div>
				<Project project={project} id={this.state.id} handleClick={this.handleClick} />
				<Description project={project} id={this.state.id} className={descClass} />
			</div>
		)
	}

}

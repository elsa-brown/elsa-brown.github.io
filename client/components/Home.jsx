import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Photo from './Photo';
import ProjectContainer from './ProjectContainer';
import Icons from './Icons';
import IconsMobile from './IconsMobile';

import projects from '../utils/projects';

const addPhoto = (photo, stack) => [...stack, photo]
const removePhoto = (photo, stack) => stack.filter(p => p !== photo)

export default class Home extends Component {
		constructor() {
		super()
		this.state = {
			projects: projects,
			photoStack: []
		}

		this.handleClick = this.handleClick.bind(this)
		this.togglePhoto = this.togglePhoto.bind(this)
	}

	handleClick() {
		// if (!this.state.photosOn) {
		// 	this.setState({ photosOn: true})
		// 	this.togglePhoto()
		// } else {
		// 	let nextPhotoStack = removePhoto('elsa', this.state.photoStack)
		// 	this.setState({
		// 		photosOn: false,
		// 		photoStack: nextPhotoStack
		// 	})

		// }
		this.togglePhoto()
	}

	togglePhoto(id) {
		let photo = id ? this.state.projects[id].photoName : 'elsa'
		let photoStack = this.state.photoStack

		const nextPhotoStack = this.state.photoStack.includes(photo) ?
			removePhoto(photo, photoStack) :
			addPhoto(photo, photoStack)

		this.setState({ photoStack: nextPhotoStack })
	}

	render() {
		const photoId = this.state.photoStack[this.state.photoStack.length - 1] || null

		return (
			<div className="container">
			<div className="photo-container">
				<CSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
				>
					<Photo key={photoId} id={photoId} />
				</CSSTransitionGroup>
			</div>
				<div className="body-wrapper">
					<div className="top-container">
						<div className="top">
							<p className="name" onClick={this.handleClick}>Elsa Brown</p>
							<Icons />
						</div>
						<h2>web developer</h2>
					</div>
					<h2>projects:</h2>
					<div className="projects">
						{ this.state.projects.map((project, idx) => {
								return (
									<ProjectContainer key={project.name} project={project} id={idx} togglePhoto={this.togglePhoto} photosOn={this.state.photosOn} />
								)
							})
						}
					</div>
					<IconsMobile />
				</div>
			</div>
		)
	}
}

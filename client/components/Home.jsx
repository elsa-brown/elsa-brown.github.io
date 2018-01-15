import React, { Component } from 'react';
// CSSTransitionGroup controls fade animation on photo show/hide
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Photo from './Photo';
import ProjectContainer from './ProjectContainer';
import Icons from './Icons';
import IconsMobile from './IconsMobile';

// project details imported from separate constants file
import projects from '../constants/projects';

// utility functions to add and remove photos from 'photoStack'
const addPhoto = (photo, stack) => [...stack, photo]
const removePhoto = (photo, stack) => stack.filter(p => p !== photo)

export default class Home extends Component {
		constructor() {
		super()
		this.state = {
			projects: projects,
			// photoStack keeps track of which photo to display, based the order of which projects are open
			photoStack: []
		}

		this.handleClick = this.handleClick.bind(this)
		this.togglePhoto = this.togglePhoto.bind(this)
	}

	handleClick() {
		this.togglePhoto()
	}

	togglePhoto(id) {
		// if no id is passed, user has clicked on name 'Elsa Brown' -- default to 'elsa' photo
		let photo = id ? this.state.projects[id].photoName : 'elsa'
		let photoStack = this.state.photoStack

		// Toggle function - If project is open, remove its photo from photoStack
		// Otherwise, add its photo to photoStack
		const nextPhotoStack = this.state.photoStack.includes(photo) ?
			removePhoto(photo, photoStack) :
			addPhoto(photo, photoStack)

		this.setState({ photoStack: nextPhotoStack })
	}

	render() {
		// grab photoId for photo on top of photoStack (to pass to Photo component and render)
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
							<p 
								className="name" 
								onClick={this.handleClick}>
								Elsa Brown
							</p>
							<Icons />
						</div>
						<h2>web developer</h2>
					</div>
					<h2>projects:</h2>
					<div className="projects">
						{ this.state.projects.map((project, idx) => {
								return (
									<ProjectContainer
										key={project.name}
										project={project}
										id={idx}
										togglePhoto={this.togglePhoto}
										photosOn={this.state.photosOn}
									/>
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

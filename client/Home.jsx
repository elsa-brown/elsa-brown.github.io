import React, { Component } from 'react';

import Photo from './photo';
import Project from './Project';
import Description from './Description';
import Icons from './icons';

export default class Home extends Component {
		constructor(props) {
		super(props)
		this.state = {
			projects: props.projects,
			projectId: undefined,
			photoStack: [],
			descOn0: false,
			descOn1: false,
			descOn2: false,
			descOn3: false,
			descOn4: false,
			descOn5: false,
			descClass0: 'desc',
			descClass1: 'desc',
			descClass2: 'desc',
			descClass3: 'desc',
			descClass4: 'desc',
			descClass5: 'desc'
		}

		this.nameHandleClick = this.nameHandleClick.bind(this)
		this.toggleProject = this.toggleProject.bind(this)
	}

	nameHandleClick() {
		console.log('in nameHandleClick photoStack is ', this.state.photoStack)

		let photoName = 'elsa'

		this.togglePhoto(photoName)
	}

	toggleProject(evt) {
		let id = evt.target.id
		let photoName = this.state.projects[id].photoName

		let descOn = `descOn${id}`
		let descClassKey = `descClass${id}`
		let nextDescClass = this.state[descOn] ? 'desc' : 'desc-show'

		this.togglePhoto(photoName)

		this.setState({
			projectId: id,
			[descOn]: !this.state[descOn],
			[descClassKey]: nextDescClass,
		})
	}

	togglePhoto(photo) {
		this.state.photoStack.includes(photo) ? 
			this.removePhoto(photo) : 
			this.addPhoto(photo)
	}

	addPhoto(photo) {
		console.log('in addPhoto photo is ', photo)

		this.setState( 
			{ photoStack: [...this.state.photoStack, photo] } 
		)
		console.log('in addPhoto photoStack is: ', this.state.photoStack)
	}

	removePhoto(selectedPhoto) {
		console.log('in removePhoto: ', selectedPhoto)
		let nextPhotoStack = 
			this.state.photoStack.filter(photo => 
				photo !== selectedPhoto
			)
		this.setState({photoStack: nextPhotoStack})
	}

	render() {
		const projects = this.props.projects
		const photoId = this.state.photoStack[this.state.photoStack.length - 1]
		console.log('In render: photoStack: ', this.state.photoStack, 'photoId: ', photoId)

		return (
			<div className="container">
						<Photo key={photoId} id={photoId} />
				<div className="body-wrapper">
					<div className="top-container">
						<div className="top">
							<p className="name" onClick={this.nameHandleClick}>Elsa Brown</p>
							<Icons />
						</div>
						<div className="title">web developer</div>
					</div>
					<div className="title">projects:</div>
					<div className="projects">
						{
							projects.map((project, idx) => {
								let descClass = `descClass${idx}`
								let descOn = `descOn${idx}`

								return (
									<div 
										className="project-container"
										onClick={ this.toggleProject }
										key={idx} id={idx}>
											<Project
												id={idx}
												name={project.title} 
											/>
											{/* <i id="leaf" className="fa fa-leaf" aria-hidden="true" /> */}
											 <Description 
												id={idx} 
												className={this.state[descClass]}
												link={project.url}
												desc={project.desc} 
											/>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

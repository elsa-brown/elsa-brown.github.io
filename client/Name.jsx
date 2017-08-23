import React, { Component } from 'react'

export default class Name extends Component {
	constructor(props) {
		super(props)
		this.state = {
			togglePhoto: props.togglePhoto
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.state.togglePhoto()
	}

	render() {
		return (
			<div className="name" onClick={this.handleClick}>Elsa Brown</div>
		)
	}
}
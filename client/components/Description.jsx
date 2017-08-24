import React from 'react';

const Description = (props) => {
	const id = props.id ? props.id : null
	const project = props.project;

	return (
		<div className={props.className}>
			<a className="desc-link" href={`${project.url}`} target="_blank" rel="noopener noreferrer" >{project.desc}</a>
		<a href={`${project.url}`} target="_blank" rel="noopener noreferrer" id={`${id}`}>
			<i className="fa fa-link" id="link" aria-hidden="true" />
		</a>
		</div>
	)
}

export default Description

import React from 'react';

const Project = (props) => {
	// console.log('in project ', props)
	return (
		<div className="project" id={`${props.id}`} onClick={props.handleClick}>{props.project.title}</div>
	)
}

export default Project;

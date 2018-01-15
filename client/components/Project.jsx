import React from 'react';

const Project = (props) => {
	return (
		<div
			className="project"
			id={`${props.id}`}
			onClick={props.handleClick}>
				{props.project.title}
			</div>
	)
}

export default Project;

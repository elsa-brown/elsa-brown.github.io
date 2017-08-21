import React from 'react';

const Project = (props) => {
	return (
		<div className="project" id={`${props.id}`}>{props.name}</div>
	)
}

export default Project;

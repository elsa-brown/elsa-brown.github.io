import React from 'react';
// import { Link } from 'react-router';

const Description = (props) => {
	const id = props.id ? props.id : null
	return (
		<div className={props.className}>
			{props.desc}
		<a href={`${props.link}`} target="_blank" id={`${id}`}><i id="link" className="fa fa-link" aria-hidden="true" /></a>
		</div>
	)
}

export default Description;
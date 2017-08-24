import React from 'react';

const Photo = (props) => {
		return (
			<div key={`${props.key}`} id={`${props.id}`} className="photo" />
		)
}

export default Photo;

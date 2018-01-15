import React from 'react';

// Photo component receives photoId for current photo on top of photoStack
const Photo = (props) => {
		return (
			<div key={`${props.key}`} id={`${props.id}`} className="photo" />
		)
}

export default Photo;

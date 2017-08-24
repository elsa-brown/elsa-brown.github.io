import React from 'react';

const Photo = (props) => {
	console.log('in photo. props: ', props, 'key: ', props.key)
		return (
			<div key={`${props.key}`} id={`${props.id}`} className="photo" />
		)
}

export default Photo;

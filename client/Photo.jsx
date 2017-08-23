import React from 'react';

const Photo = (props) => {

		// console.log('in Photo', props)

		return (
			<div id={`${props.id}`} className="photo" />
		)
}

export default Photo;
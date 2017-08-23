const photoUtils = {

	addPhoto(photo, photoStack) {
		return [...photoStack, photo]
	},

	removePhoto(photo, photoStack) {
		return photoStack.filter(p => p !== photo)
	}

}

export default photoUtils

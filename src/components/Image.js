import React, { Component } from 'react'

const imageStyle = (width, height) => {
	return {
		width,
		height,
		objectFit: "cover"
	}
}

export default class Image extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { src, isSelected, onImageClick, height, width } = this.props;
		return (
			<div className={`responsive${isSelected ? " selected" : ""}`}
				onClick={onImageClick}>
				<img src={src}
					className={`thumbnail${isSelected ? " selected" : ""}`}
					style={imageStyle(height, width)}
				/>
				<div className="checked">
					<div className="icon" />
				</div>
			</div>
		)
	}
}
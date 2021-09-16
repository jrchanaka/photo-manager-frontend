import React from "react";

// Draggable component for arrange selected photos
const Box = ({ boxColor, boxNumber, handleDrag, handleDrop, imageSrc }) => {
	return (
		<div
			data-testid={boxNumber}
			id={boxNumber}
			draggable={true}
			onDragOver={(event) => event.preventDefault()}
			onDragStart={handleDrag}
			onDrop={handleDrop}
			style={{
				backgroundColor: boxColor,
				borderColor: boxColor
			}}
			className="draggable-box"
		>
			<img src={imageSrc} data-testid="box-image-tag" />
		</div>
	);
};

export default Box;

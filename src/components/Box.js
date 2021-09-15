import React from "react";

// Draggable component for arrange selected photos
const Box = ({ boxColor, boxNumber, handleDrag, handleDrop, imageSrc }) => {
	return (
		<div
			draggable={true}
			id={boxNumber}
			onDragOver={(event) => event.preventDefault()}
			onDragStart={handleDrag}
			onDrop={handleDrop}
			style={{
				backgroundColor: boxColor,
				borderColor: boxColor
			}}
			className="draggable-box"
		>
			<img src={imageSrc} />
		</div>
	);
};

export default Box;

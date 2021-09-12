import React from "react";

// Draggable component for selected photos
const Box = ({ boxColor, boxNumber, handleDrag, handleDrop, imageSrc }) => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
        border: "1px solid",
        borderColor: boxColor,
        borderRadius: "5px",
        color: "#FFF",
        width: "150px",
        height: "150px",
        margin: "10px"
      }}
    >
      <img 
      src={imageSrc}
      style={{
        width: "150px",
        height: "150px"
      }}
      />
    </div>
  );
};

export default Box;

import React, { Component } from 'react';
import Box from './Box';
import { Button } from 'reactstrap';


// This is the draggable image list container
class ImageGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [],
            dragId: 0
        }
    }

    /**
     * This trigger when drag event executed. Set dragged event id to the state
     * @param ev // Event object
     */
    handleDrag(ev) {
        this.setState({ dragId: ev.currentTarget.id });
    }

    /**
     * This trigger when drop event executed. This will swap the possitions of dragged and dropped 
     * elements in the boxes array and update the state
     * @param ev // Event object
     */
    handleDrop(ev) {
        const { boxes, dragId } = this.state;
        const dropId = ev.currentTarget.id;

        const draggedIndex = boxes.findIndex((box) => box.id === dragId);
        const droppedIndex = boxes.findIndex((box) => box.id === dropId);

        const draggedElement = boxes[draggedIndex];
        const droppedElement = boxes[droppedIndex];

        draggedElement.order = droppedIndex + 1;
        droppedElement.order = draggedIndex + 1;

        boxes[draggedIndex] = droppedElement;
        boxes[droppedIndex] = draggedElement;

        this.setState({ boxes });
    }

    /**
     * This function will move the selected images to another array called 'boxes'. User will swap the order of elements of this array
     */
    hangleSelectImages() {
        const { images } = this.props;
        const selectedImages = [];

        images.map((image, index) => {
            index++;
            selectedImages.push({ id: `Box-${index}`, imageSrc: image.src, order: index, imageId: image.value });
        });

        this.setState({ boxes: selectedImages });
    }

    /**
     * This function will call when the save buton clicked to save arranged images in to the DB
     */
    hangleSaveSelectImages() {
        this.props.onSave(this.state.boxes);
    }

    render() {
        const { boxes } = this.state;

        return (
            <div>
                <div><h4 className="text-center m-4">
                {
                    boxes.length > 0 ? "Drag and drop to change the order" : "Photos not selected yet"
                }
                </h4></div>

                <div className="row">
                    {boxes.map((box) => (
                            <Box
                                key={box.id}
                                boxColor={box.color}
                                boxNumber={box.id}
                                imageSrc={box.imageSrc}
                                handleDrag={this.handleDrag.bind(this)}
                                handleDrop={this.handleDrop.bind(this)}
                            />
                        ))}
                </div>
                <div className="mt-4">
                    <Button
                        color="info"
                        size="lg"
                        className="mr-4 ml-4"
                        onClick={this.hangleSelectImages.bind(this)}
                    >Select Photos</Button>

                    <Button
                        color="success"
                        size="lg"   
                        onClick={this.hangleSaveSelectImages.bind(this)}
                    >Save My Favorites</Button>
                </div>
            </div>
        );
    }
}

export default ImageGrid;
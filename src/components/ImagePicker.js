import React, { Component } from 'react'
import { Map } from 'immutable'

import '../scss/image-picker.scss'
import Image from './Image'

class ImagePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picked: Map()
    }
    this.handleImageClick = this.handleImageClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
  }

  handleImageClick(image) {
    const { multiple, onPick, maxPicks, onMaxPicks } = this.props
    const pickedImage = multiple ? this.state.picked : Map()
    let newerPickedImage

    if (pickedImage.has(image.value)) {
      newerPickedImage = pickedImage.delete(image.value)
    } else {
      if (typeof maxPicks === 'undefined') {
        newerPickedImage = pickedImage.set(image.value, image.src)
      } else {
        if (pickedImage.size < maxPicks) {
          newerPickedImage = pickedImage.set(image.value, image.src)
        } else {
          onMaxPicks(image)
        }
      }
    }

    if (newerPickedImage) {
      this.setState({ picked: newerPickedImage })

      const pickedImageToArray = []
      newerPickedImage.map((image, i) => pickedImageToArray.push({ src: image, value: i }))

      onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
    }
  }

  renderImage(image, i) {
    return (
      <Image
        src={image.src}
        isSelected={this.state.picked.has(image.value)}
        onImageClick={() => this.handleImageClick(image)}
        key={i}
      />
    )
  }

  render() {
    const { images } = this.props
    return (
      <div className="image_picker">
        {images.map(this.renderImage)}
        <div className="clear" />
      </div>
    )
  }
}

export default ImagePicker
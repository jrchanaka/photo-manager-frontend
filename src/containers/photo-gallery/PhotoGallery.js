import React, { Component } from 'react';
import ImagePicker from '../../components/ImagePicker';
import 'react-image-picker/dist/index.css';
import ImageGrid from '../../components/ImageGrid';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhotoList, savePhotoList } from "../../actions/photos.action";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const userId = 101;

class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photosList: [],
            max_message: '',
            maxPhotosCount: 9,
            selectedPhotos: []
        }
    }

    componentDidMount() {
        this.props.getPhotoList(userId)
    }

    componentDidUpdate(prev, updated) {
        if (prev.photos !== this.props.photos) {
            this.setState({ photosList: this.props.photos });
        }

        if (prev.savePhotos !== this.props.savePhotos) {
            this.showMessageBox();
        }
    }

    onPickImagesWithLimit(photos) {
        this.setState({ selectedPhotos: photos })
    }

    onPickMaxImages() {
        confirmAlert({
            title: 'Image Limit',
            message: `You can select up to maximum ${this.state.maxPhotosCount} images`,
            buttons: [
                {
                    label: 'Ok',
                    onClick: () => {}
                }
            ]
        });
    }

    saveArrangedPhotos(photos) {
        const formattedData = [];

        photos.map((photo) => {
            formattedData.push({
                userId: userId,
                imageId: photo.imageId,
                imageUrl: `${photo.imageSrc}/${photo.imageId}.jpeg`,
                order: photo.order
            });
        });

        console.log(formattedData);
        this.props.savePhotoList(userId, formattedData);
    }

    showMessageBox() {
        const { history } = this.props;

        confirmAlert({
            title: 'Successfully Saved',
            message: 'Do you want to see your favorite photos now?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => history.push('/favorite-gallery')
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    }

    render() {
        const { photosList, maxPhotosCount, selectedPhotos } = this.state;
        return (
            <div className="animated fadeIn">
                <h1 className="text-center m-4">My Photos</h1>

                <div>
                    <ImagePicker
                        images={photosList.map((image, i) => ({ src: image.url, value: image.id }))}
                        onPick={this.onPickImagesWithLimit.bind(this)}
                        maxPicks={maxPhotosCount}
                        onMaxPicks={this.onPickMaxImages.bind(this)}
                        multiple
                    />
                </div>

                <h1 className="text-center m-4">My Favorits</h1>

                <div>
                    <ImageGrid images={selectedPhotos} onSave={this.saveArrangedPhotos.bind(this)} />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPhotoList, savePhotoList }, dispatch);
}

function mapStateToProps({ photos, savePhotos }) {
    return { photos, savePhotos };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);

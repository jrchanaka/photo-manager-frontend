import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSavedPhotoList } from "../../actions/photos.action";

const userId = 101;

class FavoriteGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getSavedPhotoList(userId);
    }

    renderImages(photo, i) {
        return (
            <div className="col-md-4" key={i}>
                <img src={photo.imageUrl} className="favorite-gallery-img"/>
            </div>
        );
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div><h1 className="text-center m-4">My Favorits</h1></div>
                <div className="row">
                    {
                        this.props.savedPhotos ?
                        this.props.savedPhotos.map((photo, i) => {
                            return this.renderImages(photo, i);
                        })
                        :
                        ''
                    }
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSavedPhotoList }, dispatch);
}

function mapStateToProps({ savedPhotos }) {
    return { savedPhotos };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteGallery);

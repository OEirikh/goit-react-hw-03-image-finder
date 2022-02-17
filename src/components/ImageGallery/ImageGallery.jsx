import React, { Component } from "react";
import axios from "axios";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "23662524-8f9d066540a3192ffa9ff9d93";

class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(pp, ps) {
    const query = this.props.query;

    if (query !== pp.query) {
      // console.log("props is change");
      const response = await axios.get(
        `?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState({ images: response.data.hits });
      // console.log(this.state.images);
    }
  }

  render() {
    const { images } = this.state;
    return (
      <ul className={s.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

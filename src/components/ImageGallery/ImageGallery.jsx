import React, { Component } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  componentDidUpdate(pp, ps) {
    if (this.props.query !== pp.query) {
      console.log("props is change");
    }
  }

  render() {
    return (
      <ul className={s.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;

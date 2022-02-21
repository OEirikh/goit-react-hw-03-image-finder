import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, handleTogleModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          handleTogleModal={handleTogleModal}
          key={id}
          img={webformatURL}
          modalImg={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

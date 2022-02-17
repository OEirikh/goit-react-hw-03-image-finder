import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, alt }) => (
  <li className={s.GalleryItem}>
    <img className={s.ImageGalleryItemImage} src={src} alt={alt} />
  </li>
);
export default ImageGalleryItem;

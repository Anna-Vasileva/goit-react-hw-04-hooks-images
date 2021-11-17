import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, onClickPicture }) => {
  return (
    <ul className={s.ImageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClickPicture}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  onClickPicture: PropTypes.func.isRequired,
};

export default ImageGallery;

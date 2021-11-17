import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      key={id}
      onClick={onClick}
      data-list
      data-large-img={largeImageURL}
    >
      <img
        src={webformatURL}
        alt="изображение pixabay"
        className={s["ImageGalleryItem-image"]}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

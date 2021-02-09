import React, { Component } from 'react'
import '../styles.css'


function ImageGallery({ images, openModal }) {
    return (
        <ul className="ImageGallery" >
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <li key={id} className="ImageGalleryItem" onClick={() => openModal(largeImageURL)}>
                    <img src={webformatURL} alt='' className="ImageGalleryItem-image"/>
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;
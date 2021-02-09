import React, { Component } from 'react'
import '../styles.css'


function ImageGallery({ images }) {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL }) => (
                <li key={id} className="ImageGalleryItem">
                    <img src={webformatURL} alt='' className="ImageGalleryItem-image"/>
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;
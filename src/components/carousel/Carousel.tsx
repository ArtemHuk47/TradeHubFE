import React, {useEffect} from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Carousel.css";

interface CarouselBlockProps{
    imageUrls: string[]
}
function CarouselBlock({imageUrls} : CarouselBlockProps) {
    console.log("Image URLs:", imageUrls); // Debug to see what URLs are passed

    const images = imageUrls.map(x => ({
        original: `http://localhost:5292/${x}`,
        thumbnail: `http://localhost:5292/${x}`
    }));

    return (
        <div className="carousel-block">
            <ImageGallery items={images} />
        </div>
    );
}

export default CarouselBlock;

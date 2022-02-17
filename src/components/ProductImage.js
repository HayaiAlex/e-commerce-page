import React, { useState } from 'react';
import PreviousIcon from './../images/icon-previous.svg';
import NextIcon from './../images/icon-next.svg';
import CloseIcon from './../images/icon-close.svg';
import ProductImg1 from './../images/image-product-1.jpg';
import ProductImg2 from './../images/image-product-2.jpg';
import ProductImg3 from './../images/image-product-3.jpg';
import ProductImg4 from './../images/image-product-4.jpg';
import Thumbnail1 from './../images/image-product-1-thumbnail.jpg';
import Thumbnail2 from './../images/image-product-2-thumbnail.jpg';
import Thumbnail3 from './../images/image-product-3-thumbnail.jpg';
import Thumbnail4 from './../images/image-product-4-thumbnail.jpg';

const ProductImage = () => {
    const [activeImg, setActiveImg] = useState(ProductImg1)

    // eval() does not work for imports so re-referencing here
    const img1 = ProductImg1;
    const img2 = ProductImg2;
    const img3 = ProductImg3;
    const img4 = ProductImg4;
    const setImage = img => () => {
        setActiveImg(eval('img' + img));
    }

    const [tapePosition, setTapePosition] = useState(1)
    const slide = direction => () => {
        console.log("slide", direction, tapePosition)
        let maxImages = 4
        if (direction === "left") {
            tapePosition <= 1 ? setTapePosition(maxImages) : setTapePosition(Number(tapePosition) - 1);
        } else if (direction === "right") {
            tapePosition >= maxImages ? setTapePosition(1) : setTapePosition(Number(tapePosition) + 1);
        }
    }

    const [lightboxOpen, setLightboxOpen] = useState(false)
    const toggleLightbox = () => {
        setLightboxOpen(!lightboxOpen);
    }

    const setLightboxImage = position => () => {
        setTapePosition(position)
    }

    return (
        <div id="product-image-container">

            {/* For mobile have buttons slide between images */}
            <img onClick={slide("left")} className="previous-button" role="button" src={PreviousIcon} alt="Previous Button" />
            <img onClick={slide("right")} className="next-button" role="button" src={NextIcon} alt="Next Button" />

            <div className={('product-image-tape-position-' + tapePosition) + " product-image-tape"}>
                <img src={ProductImg1} alt="Image of shoes" className="product-image-mobile" />
                <img src={ProductImg2} alt="Image of shoes" className="product-image-mobile" />
                <img src={ProductImg3} alt="Image of shoes" className="product-image-mobile" />
                <img src={ProductImg4} alt="Image of shoes" className="product-image-mobile" />
            </div>

            {/* For desktop, use thumbnails under main image */}
            <img onClick={toggleLightbox} id="product-image" src={activeImg} alt="Image of shoes" />

            <div className="product-image-thumbnail-container">
                <img onClick={setImage(1)} className={'product-image-thumbnail ' + (activeImg === img1 ? 'active-thumbnail' : '')} src={Thumbnail1} alt="Shoe Thumbnail" />
                <img onClick={setImage(2)} className={'product-image-thumbnail ' + (activeImg === img2 ? 'active-thumbnail' : '')} src={Thumbnail2} alt="Shoe Thumbnail" />
                <img onClick={setImage(3)} className={'product-image-thumbnail ' + (activeImg === img3 ? 'active-thumbnail' : '')} src={Thumbnail3} alt="Shoe Thumbnail" />
                <img onClick={setImage(4)} className={'product-image-thumbnail ' + (activeImg === img4 ? 'active-thumbnail' : '')} src={Thumbnail4} alt="Shoe Thumbnail" />
            </div>

            {/* Desktop lightbox */}
            <div className={"product-image-lightbox " + (lightboxOpen ? 'product-image-lightbox-open' : '')}>
                <img onClick={toggleLightbox} role="button" className='close-button' src={CloseIcon} alt="Close Icon" />

                <img onClick={slide("left")} className="previous-button" role="button" src={PreviousIcon} alt="Previous Button" />
                <img onClick={slide("right")} className="next-button" role="button" src={NextIcon} alt="Next Button" />

                <div className="overflow-hidden">
                    <div className={'product-image-tape product-image-tape-position-' + tapePosition}>
                        <img src={ProductImg1} alt="Image of shoes" className="product-image-mobile" />
                        <img src={ProductImg2} alt="Image of shoes" className="product-image-mobile" />
                        <img src={ProductImg3} alt="Image of shoes" className="product-image-mobile" />
                        <img src={ProductImg4} alt="Image of shoes" className="product-image-mobile" />
                    </div>
                </div>

                <div className="product-image-thumbnail-container">
                    <div onClick={setLightboxImage(1)} className='thumbnail-container'>
                        <img className='product-image-thumbnail' src={Thumbnail1} alt="Shoe Thumbnail" />
                        <div className={tapePosition === 1 ? 'thumbnail-overlay-active' : 'thumbnail-overlay'}></div>
                    </div>
                    <div onClick={setLightboxImage(2)} className='thumbnail-container'>
                        <img className='product-image-thumbnail' src={Thumbnail2} alt="Shoe Thumbnail" />
                        <div className={tapePosition === 2 ? 'thumbnail-overlay-active' : 'thumbnail-overlay'}></div>
                    </div>
                    <div onClick={setLightboxImage(3)} className='thumbnail-container'>
                        <img className='product-image-thumbnail' src={Thumbnail3} alt="Shoe Thumbnail" />
                        <div className={tapePosition === 3 ? 'thumbnail-overlay-active' : 'thumbnail-overlay'}></div>
                    </div>
                    <div onClick={setLightboxImage(4)} className='thumbnail-container'>
                        <img className='product-image-thumbnail' src={Thumbnail4} alt="Shoe Thumbnail" />
                        <div className={tapePosition === 4 ? 'thumbnail-overlay-active' : 'thumbnail-overlay'}></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductImage;

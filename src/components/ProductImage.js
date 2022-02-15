import React, { useState } from 'react';
import PreviousIcon from './../images/icon-previous.svg';
import NextIcon from './../images/icon-next.svg';
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

    return (
        <div id="product-image-container">
            <img id="previous-button" role="button" src={PreviousIcon} alt="Previous Button" />
            <img id="next-button" role="button" src={NextIcon} alt="Next Button" />
            <img id="product-image" role="img" src={activeImg} alt="Image of shoes" />

            <div id="product-image-thumbnail-container">
                <img onClick={setImage(1)} className={'product-image-thumbnail ' + (activeImg === img1 ? 'active-thumbnail' : '')} src={Thumbnail1} alt="Shoe Thumbnail" />
                <img onClick={setImage(2)} className={'product-image-thumbnail ' + (activeImg === img2 ? 'active-thumbnail' : '')} src={Thumbnail2} alt="Shoe Thumbnail" />
                <img onClick={setImage(3)} className={'product-image-thumbnail ' + (activeImg === img3 ? 'active-thumbnail' : '')} src={Thumbnail3} alt="Shoe Thumbnail" />
                <img onClick={setImage(4)} className={'product-image-thumbnail ' + (activeImg === img4 ? 'active-thumbnail' : '')} src={Thumbnail4} alt="Shoe Thumbnail" />
            </div>
        </div>
    );
};

export default ProductImage;

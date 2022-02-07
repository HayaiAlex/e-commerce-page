import React from 'react';
import PreviousIcon from './../images/icon-previous.svg';
import NextIcon from './../images/icon-next.svg';
import ProductImg1 from './../images/image-product-1.jpg';

const ProductImage = () => {
    return (
        <div id="product-image-container">
            <img id="previous-button" role="button" src={PreviousIcon} alt="Previous Button" />
            <img id="next-button" role="button" src={NextIcon} alt="Next Button" />
            <img id="product-image" role="img" src={ProductImg1} alt="Image of shoes" />
        </div>
    );
};

export default ProductImage;

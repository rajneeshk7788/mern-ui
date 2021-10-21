import React, { Component } from 'react';
import Image1 from '../image/225_FeatureImageTemplate-20.jpg';
import Image2 from '../image/Footware DIsplay Racks_s2.jpeg';
import Image3 from '../image/225_FeatureImageTemplate-20.jpg';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item class="carousel-item">
                    <img src={Image1} width="1400px" height="460px" alt="Image1" />
                </Carousel.Item>
                <Carousel.Item class="carousel-item">
                    <img src={Image2} width="1400px" height="460px" alt="Image2" />
                </Carousel.Item>
                <Carousel.Item class="carousel-item">
                    <img src={Image3} width="1400px" height="460px" alt="Image3" />
                </Carousel.Item>
                <Carousel.Item class="carousel-item">
                    <img src={Image2} width="1400px" height="460px" alt="Image2" />
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default ImageSlider;

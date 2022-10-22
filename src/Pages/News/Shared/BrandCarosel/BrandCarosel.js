import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1jpg from '../../../../assets/brands/brand1jpg.jpg'
import brand2 from '../../../../assets/brands/brand2.jpg'

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1jpg}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarosel;
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Carousel(props) {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplaySpeed: 6000,
        autoplay: true,

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 5,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    infinite: true,
                },
            }],
    };
    return (
      <Slider {...settings}>{props.children}</Slider>
    );
}

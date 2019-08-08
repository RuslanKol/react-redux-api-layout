import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderImg1 from "../../images/slider-img-1.png";

const LandSlider = props => {
  return (
    <CarouselProvider
      naturalSlideWidth={315}
      naturalSlideHeight={575}
      isPlaying={true}
      interval={3000}
      totalSlides={3}
      orientation="vertical"
      className="land-slider__block"
    >
      <Slider>
        <Slide index={0}>
          <Image src={SliderImg1} className="land-slider__block_image" />
        </Slide>
        <Slide index={1}>
          <Image src={SliderImg1} className="land-slider__block_image" />
        </Slide>
        <Slide index={2}>
          <Image src={SliderImg1} className="land-slider__block_image" />
        </Slide>
      </Slider>
      <DotGroup
        className="land-slider__dots"
        disableActiveDots={false}
        dotNumbers={false}
      />
    </CarouselProvider>
  );
};

export default LandSlider;

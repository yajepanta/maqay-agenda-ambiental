import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.css'
 
export const SimpleSlider = () => {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>En el año 2017, se generaron más de 7 millones de toneladas de residuos sólidos, el 50% se dispuso adecuadamente en rellenos sanitarios. Y solo se han reciclado 45 mil toneladas de residuos. Lo que no representa ni el 1% del total de residuos generados.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    )
}
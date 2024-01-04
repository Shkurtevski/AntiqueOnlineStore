import React from "react";
import Slider from "react-slick";

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image: string, index: number) => (
        <div key={index} className="img-wrapper">
          <img src={image} alt={title} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

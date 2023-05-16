import React, { FC } from "react";
import Slider from "react-slick";
import { useGetCatsQuery } from "./sliderApiSlice";
import { Cat } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderComponent: FC = () => {
  const { data: cats, refetch } = useGetCatsQuery("cats", {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {cats?.map((cat: Cat) => (
          <div key={cat.id}>
            <div className="card">
              {cat.breeds.map((breed) => (
                <div key={breed.id} className="breed">
                  {breed.name}
                </div>
              ))}
              <img src={cat.url} alt={cat.url} className="cardImage" />
              <button className="btn" onClick={handleClick}>
                Replace photo
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

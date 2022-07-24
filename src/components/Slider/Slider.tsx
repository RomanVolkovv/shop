import Slider from 'react-slick';
import { sliderData } from '../../utils/sliderData';
import styled from './Slider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className={styled.slider_wrapper}>
      <div className={styled.internal_block}>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div>
              <img src={item.url} alt='bzz' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;

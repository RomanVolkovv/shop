import Slider from 'react-slick';
import { sliderData } from '../../utils/sliderData';
import styled from './Slider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi';

const Prev = ({ onClick, className }: any) => {
  return (
    <BiArrowFromRight
      className={className}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: '#00a046',
      }}
    />
  );
};

const Next = ({ onClick, className }: any) => {
  return (
    <BiArrowFromLeft
      className={className}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: '#00a046',
      }}
    />
  );
};

const settings = {
  autoplay: true,
  // autoplaySpeed: 3000,
  rows: 1,
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
};

const SliderComponent = () => {
  return (
    <div className={styled.slider_wrapper}>
      <div className={styled.internal_block}>
        <Slider {...settings}>
          {sliderData.map((ticket) => (
            <div key={ticket.id}>
              <img className={styled.image} src={ticket.url} alt='bzz' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;

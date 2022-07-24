import { Slider } from '../../components/Slider';
import styled from './Home.module.scss';

const Home = () => {
  return (
    <div className={styled.home_wrapper}>
      <Slider />
    </div>
  );
};

export default Home;

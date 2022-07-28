import { useAppDispatch } from '../../hook';
import styled from './SwitcherButton.module.scss';
import { signIn, signOn } from '../../redux/switchAuthButtonSlice';

const SwitcherButton = () => {
  const dispatch = useAppDispatch();

  function sIn() {
    dispatch(signIn());
  }

  function sOn() {
    dispatch(signOn());
  }

  return (
    <div className={styled.toggleBtn}>
      <button onClick={sIn} className={styled.btn}>
        SIGN IN
      </button>
      <button onClick={sOn} className={styled.btn}>
        SIGN ON
      </button>
    </div>
  );
};

export default SwitcherButton;

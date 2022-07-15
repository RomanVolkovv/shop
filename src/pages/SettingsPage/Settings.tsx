import styles from './Settings.module.scss';
import { TbSun } from 'react-icons/tb';

const Settings = () => {
  function toggleTheme() {
    console.log('isToggleTheme');
  }

  return (
    <div className={styles.setting_wrapper}>
      <p>theme: </p>
      <TbSun className={styles.icon} onClick={() => toggleTheme()} />
    </div>
  );
};

export default Settings;

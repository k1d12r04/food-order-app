import Cart from '../Cart/Cart';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1> Lezzet Deryası </h1>
          <Cart />
        </header>
      </div>
    </div>
  );
};

export default Header;

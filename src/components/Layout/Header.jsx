import Cart from '../Cart/Cart';
import Button from '../UI/Button/Button';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <div className={styles['header-container']}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>React Meals</h1>
          <Cart className={styles.header__cart}>
            <img src="src/assets/cart.svg" alt="cart" />
            <p>Your Cart</p>
            <Button className={styles.btn}>0</Button>
          </Cart>
        </header>
      </div>
    </div>
  );
};

export default Header;

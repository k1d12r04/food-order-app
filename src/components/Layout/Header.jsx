import { useContext } from 'react';
import OrderInfo from '../../context/order-info';
import Cart from '../Cart/Cart';
import Button from '../UI/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  const { sumAmount } = useContext(OrderInfo);

  return (
    <div className={styles['header-container']}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1> Lezzet Deryası </h1>
          <Cart className={styles.header__cart}>
            <img src="src/assets/cart.svg" alt="cart" />
            <p>Sepetiniz</p>
            <Button className={styles.btn}> {sumAmount} </Button>
          </Cart>
        </header>
      </div>
    </div>
  );
};

export default Header;

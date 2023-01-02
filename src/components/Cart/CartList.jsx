import { Fragment, useContext } from 'react';
import OrderInfo from '../../context/order-info';
import CartItem from './CartItem';
import styles from './CartList.module.scss';

const CartList = () => {
  const { selectedMeals } = useContext(OrderInfo);

  return (
    <Fragment>
      <ul className={styles['cart-list']}>
        {selectedMeals.map(meal => (
          <CartItem key={meal.id} name={meal.name} price={meal.price} />
        ))}
      </ul>
      <div className={styles.summary}>
        <h2>Total Amount</h2>
        <h2> sum price</h2>
      </div>
    </Fragment>
  );
};

export default CartList;

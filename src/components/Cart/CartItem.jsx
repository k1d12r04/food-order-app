import styles from './CartItem.module.scss';

const CartItem = ({ name, price, amount, sumPrice }) => {
  const handleDecrease = () => {
    // decrease
  };

  const handleIncrease = () => {
    // increase
  };

  return (
    <li className={styles['order-summary']}>
      <div className={styles['order-info']}>
        <div className={styles['order-info__details']}>
          <h3>{name}</h3>
          <p> {price} &#x20BA; </p>
        </div>
        <p className={styles['order-info__amount']}> amount: {amount} </p>
      </div>
      <div className={styles['order-change']}>
        <button onClick={handleDecrease}> - </button>
        <button onClick={handleIncrease}> + </button>
      </div>
    </li>
  );
};

export default CartItem;

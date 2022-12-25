import styles from './Cart.module.scss';

const Cart = props => {
  return (
    <div className={`${styles.cart} ${props.className} `}>{props.children}</div>
  );
};

export default Cart;

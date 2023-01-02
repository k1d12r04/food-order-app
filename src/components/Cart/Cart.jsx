import styles from './Cart.module.scss';
import { Fragment, useContext, useState } from 'react';
import OrderInfo from '../../context/order-info';
import Modal from '../UI/Modal/Modal';
import CartList from './CartList';
import BackDrop from '../UI/BackDrop/BackDrop';

const Cart = () => {
  const { sumAmount } = useContext(OrderInfo);

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const submitOrderHandler = () => {
    console.log('Ordering...');
  };

  return (
    <Fragment>
      <button onClick={showModalHandler} className={styles.cart}>
        <img src="src/assets/cart.svg" alt="cart" />
        <p className={styles['cart__text']}>Sepetiniz</p>
        <div className={styles['sum-amount']}> {sumAmount} </div>
      </button>
      <BackDrop show={showModal} onClose={closeModalHandler} />
      <Modal
        show={showModal}
        onClose={closeModalHandler}
        title={'Order Summary'}
        closeButtonText={'Close'}
      >
        <CartList />
        <button onClick={submitOrderHandler} className={styles['btn-submit']}>
          Submit
        </button>
        <button onClick={closeModalHandler} className={styles['btn-cancel']}>
          Close
        </button>
      </Modal>
    </Fragment>
  );
};

export default Cart;

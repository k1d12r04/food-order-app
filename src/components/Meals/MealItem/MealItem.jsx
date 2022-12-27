import styles from './MealItem.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { useContext, useState } from 'react';
import OrderInfo from '../../../context/order-info';

const MealItem = props => {
  const { setSumAmount } = useContext(OrderInfo);

  const [enteredAmount, setEnteredAmount] = useState(1);

  const inputChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };

  const changeAmountHandler = () => {
    setSumAmount(prevSumAmount => {
      const updatedSumAmount = prevSumAmount + +enteredAmount;
      return updatedSumAmount;
    });
  };

  return (
    <div className={styles['meal-item']}>
      <div className={styles['meal-info']}>
        <h3 className={styles['meal-info__name']}>{props.name}</h3>
        <p className={styles['meal-info__desc']}> {props.description} </p>
        <p className={styles['meal-info__price']}> {props.price} &#x20BA;</p>
      </div>
      <div className={styles['add-meal']}>
        <div className={styles['add-meal__info']}>
          <h3>Miktar</h3>
          <Input
            onChange={inputChangeHandler}
            value={enteredAmount}
            type={'number'}
            className={styles['add-meal__input']}
          />
        </div>
        <Button
          onClick={changeAmountHandler}
          className={styles['add-meal__btn']}
        >
          Ekle
        </Button>
      </div>
    </div>
  );
};

export default MealItem;

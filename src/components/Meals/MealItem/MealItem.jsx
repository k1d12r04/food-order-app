import { Fragment } from 'react';
import styles from './MealItem.module.scss';

const MealItem = props => {
  return (
    <div className={styles['meal-item']}>
      <div className={styles['meal-info']}>
        <h3 className={styles['meal-info__name']}>{props.name}</h3>
        <p className={styles['meal-info__desc']}> {props.description} </p>
        <p className={styles['meal-info__price']}> ${props.price} </p>
      </div>
      <div className={styles['add-meal']}>
        <div className={styles['add-meal__info']}>
          <h3>Amount</h3>
          <p>INPUT</p>
        </div>
        <h3>ADD BUTTON</h3>
      </div>
    </div>
  );
};

export default MealItem;

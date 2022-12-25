import styles from './MealItem.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const MealItem = props => {
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
          <Input type={'text'} className={styles['add-meal__input']} />
        </div>
        <Button className={styles['add-meal__btn']}>Ekle</Button>
      </div>
    </div>
  );
};

export default MealItem;

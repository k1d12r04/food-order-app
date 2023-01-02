import Button from '../../UI/Button/Button';
import styles from './MealItem.module.scss';
import Input from '../../UI/Input/Input';
import { useContext, useReducer, useState } from 'react';
import OrderInfo from '../../../context/order-info';

// const initialState = [];

// function mealReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_ALL': {
//       return {
//         allSelectedMeals: [
//           ...state, {action.nextSelectedMeal}
//         ]
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

const MealItem = props => {
  // const [mealState, dispatchMealState] = useReducer(mealReducer, initialState);

  const { setSumAmount, selectedMeals, setSelectedMeals } =
    useContext(OrderInfo);

  const [enteredAmount, setEnteredAmount] = useState(1);

  const inputChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };

  const changeAmountHandler = () => {
    const selectedMeal = props.defaultMeals.find(meal => meal.id === props.id);

    setSelectedMeals([...selectedMeals, selectedMeal]);

    // dispatchMealState({
    //   type: 'ADD_ALL',
    //   selectedMeals: selectedMeal,
    // });

    // const filteredMeals = props.defaultMeals.filter(
    //   meal => meal.id === selectedMeal.id
    // );
    // console.log(...filteredMeals);

    // });

    // setSelectedMeals(prevSelectedMeals => {
    //   const selectedMeals = [...prevSelectedMeals];
    //   const findSelectedMeals = mealId => {
    //     mealId = props.id;
    //     props.defaultMeals.filter(meal => {
    //       return meal.id === mealId;
    //     });
    //   };
    //   selectedMeals.push(findSelectedMeals);
    // });

    // setSelectedMeals(prevSelectedMeals => {
    //   const updatedSelectedMeals = [...prevSelectedMeals];
    //   updatedSelectedMeals.unshift(Math.random());
    //   console.log(updatedSelectedMeals);
    // });

    setSumAmount(prevSumAmount => {
      const updatedSumAmount = prevSumAmount + +enteredAmount;
      return updatedSumAmount;
    });
  };

  // console.log(mealNames);
  // console.log(mealState);

  // const mealNames = mealState.map(meal => {
  //   return meal.name;
  // });

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

        {/* <div>
          {mealState.allSelectedMeals.map(meal => (
            <p>{meal.name}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MealItem;

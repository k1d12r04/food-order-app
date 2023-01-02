import styles from './MealsList.module.scss';
import MealItem from '../MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Püreli Tepsi Kebabı',
    description: 'Püre ile kebabın enfes birleşimi',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Patatesli Havuçlu Bezelye',
    description: 'Sebzeye doyacaksınız',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Güveçte Patatesli Kremalı Mantar',
    description: 'Mantar sevenlere özel',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Sarımsaklı Kabak Püresi',
    description: 'Fazla sağlıklı bir şey aranlara',
    price: 18.99,
  },
];

const defaultMeals = DUMMY_MEALS;

const MealsList = () => {
  return (
    <ul className={styles['meals-list']}>
      {defaultMeals.map(meals => (
        <MealItem
          key={meals.id}
          id={meals.id}
          name={meals.name}
          description={meals.description}
          price={meals.price}
          defaultMeals={defaultMeals}
        />
      ))}
    </ul>
  );
};

export default MealsList;

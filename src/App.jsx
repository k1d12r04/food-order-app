import { Fragment } from 'react';
import styles from './App.module.scss';
import Header from './components/Layout/Header';
import IntroCard from './components/IntroCard/IntroCard';
import MealsList from './components/Meals/MealsList/MealsList';

function App() {
  return (
    <Fragment>
      <Header />
      <img
        className={styles.img}
        src="src/assets/meals.jpg"
        alt="meals photo"
      />
      <IntroCard />
      <MealsList />
    </Fragment>
  );
}

export default App;

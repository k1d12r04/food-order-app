import styles from './App.module.scss';
import Header from './components/Layout/Header';
import IntroCard from './components/IntroCard/IntroCard';
import MealsList from './components/Meals/MealsList/MealsList';
import OrderInfo from './context/order-info';
import { useState } from 'react';

function App() {
  const [sumAmount, setSumAmount] = useState(0);

  return (
    <OrderInfo.Provider
      value={{
        sumAmount,
        setSumAmount,
      }}
    >
      <Header />
      <img
        className={styles.img}
        src="src/assets/meals.jpg"
        alt="meals photo"
      />
      <IntroCard />
      <MealsList />
    </OrderInfo.Provider>
  );
}

export default App;

import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <img className="img" src="src/assets/meals.jpg" alt="meals photo" />
    </Fragment>
  );
}

export default App;

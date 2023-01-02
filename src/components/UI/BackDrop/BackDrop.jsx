import styles from './BackDrop.module.scss';
import ReactDOM from 'react-dom';

const BackDrop = props => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div onClick={props.onClose} className={styles.backdrop}></div>,
    document.getElementById('root')
  );
};

export default BackDrop;

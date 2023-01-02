import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div onClick={props.onClose} className={styles.modal}>
      <div
        onClick={e => e.stopPropagation()}
        className={styles['modal__content']}
      >
        <div className={styles['modal__header']}>
          <h4 className={styles['modal__header__title']}>{props.title}</h4>
        </div>
        <div className={styles['modal__body']}>{props.children}</div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export default Modal;

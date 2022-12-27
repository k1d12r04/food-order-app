import styles from './Input.module.scss';

const Input = props => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      type={props.type || 'text'}
      className={`${styles.input} ${props.className} `}
    >
      {props.children}
    </input>
  );
};

export default Input;

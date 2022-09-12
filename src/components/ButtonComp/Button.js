import styles from './Button.module.scss';


const ButtonComp  = props => {
  return (
    <button className={styles.button} type="button">{props.buttonText}</button>
  );
};

export default ButtonComp;
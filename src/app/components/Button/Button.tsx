import styles from './button.module.scss';
type ButtonProps = {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}
export const Button =({ text, onClick , disabled }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>{text}</button>
    )
}
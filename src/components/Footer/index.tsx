import styles from "./styles.module.css";

export const Footer = () => {
    return <footer className={styles.footer}>
        <a href="" className={styles.footerLink}>Entenda como funciona a técnica pomodoro</a>
        <a href="" className={styles.footerLink}>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
}
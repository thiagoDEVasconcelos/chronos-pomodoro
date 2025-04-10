import styles from "./styles.module.css";

type HeadingProps ={
    children: React.ReactNode;
}

export const Heading = (props: HeadingProps) => {
    return <h1 className={styles.heading}>{props.children}</h1>
}
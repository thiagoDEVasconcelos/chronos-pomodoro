import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export const CountDown = () => {
    const {state} = useTaskContext();
    console.log("sss",state);
    
    return <div className={styles.container}>{state.formattedSecondsToMinutes}</div>
}
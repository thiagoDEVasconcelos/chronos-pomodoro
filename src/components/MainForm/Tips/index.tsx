import { getNextCycleType } from "../../../utils/getNextCycleType";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"

export const Tips = () => {
    const {state} = useTaskContext();

    const nextCycleType = getNextCycleType(state.currentCycle);

    const tipsForWhenActiveTask = {
        workTime: <span><strong>Foque por {state.config.workTime}min</strong></span>,
        shortBreakTime: <span><strong>Descanse por {state.config.shortBreakTime}min</strong></span>,
        longBreakTime: <span><strong>Descanse por {state.config.longBreakTime}min</strong></span>
    }

    const tipsForWhenNoActiveTask = {
        workTime: <span><strong>O próximo ciclo é de {state.config.workTime}min</strong></span>,
        shortBreakTime: <span><strong>O próximo ciclo é de {state.config.shortBreakTime}min</strong></span>,
        longBreakTime: <span><strong>O próximo ciclo é de {state.config.longBreakTime}min</strong></span>
    } 

    return state.activeTask ? (
        tipsForWhenActiveTask[state.activeTask.type]
        ) : (
        tipsForWhenNoActiveTask[nextCycleType]  
    );
}
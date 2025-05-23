import { PlayIcon, StopCircleIcon } from "lucide-react";

import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../contexts/TaskContext/taskActions";

export const MainForm = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
 
  const nextCycleType = getNextCycleType(state.currentCycle -1);

    
  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("A task não pode estar vazia");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }
    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})
  }

  function handleInterruptTask() {
    dispatch({type: TaskActionTypes.INTERRUPT_TASK})
  }

    return (
        <form action="" onSubmit={handleCreateNewTask} className="form">
          <button type="button">Clicar</button>
        <div className="formRow">
          <DefaultInput 
            id="meuInput" 
            type="text" 
            ref={taskNameInput} 
            labelText="ads asdasdad" 
            placeholder="Digite algo"
            disabled={!!state.activeTask}
          />
        </div>

        <div className="formRow">
          <p>Próximo intervalo é de 25min</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          {!state.activeTask ? (
            <DefaultButton 
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type='submit'
              icon={<PlayIcon/>}
              key='botao_submit'
            />) : (
            <DefaultButton
              aria-label="Interromper tarefa atual"
              title="Interromper tarefa atual"
              type="button"
              color="red"
              icon={<StopCircleIcon/>}
              onClick={handleInterruptTask}
              key='botao_button'
            />)}
        </div>
      </form>
    )
}
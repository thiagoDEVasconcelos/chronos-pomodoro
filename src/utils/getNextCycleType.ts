import { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    const nextCycle = currentCycle + 1;

    if (nextCycle % 8 === 0) return 'longBreakTime';
    if (nextCycle % 2 === 0) return 'shortBreakTime';
    return 'workTime';
}

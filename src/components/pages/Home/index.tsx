import { MainTemplate } from "../../templates/MainTemplate"
import { CountDown } from "../../CountDown"
import { Container } from "../../Container"
import { MainForm } from "../../MainForm"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"

export const Home = () => {
    const taskContext = useTaskContext();
    console.log(taskContext);
    
    return (
        <MainTemplate>
        <Container>
            <CountDown/>
        </Container>
        <Container>
            <MainForm/>
        </Container>
        </MainTemplate>
    )
}
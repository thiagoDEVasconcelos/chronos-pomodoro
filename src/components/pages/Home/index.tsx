import { MainTemplate } from "../../templates/MainTemplate"
import { CountDown } from "../../CountDown"
import { Container } from "../../Container"
import { MainForm } from "../../MainForm"

export const Home = () => {
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
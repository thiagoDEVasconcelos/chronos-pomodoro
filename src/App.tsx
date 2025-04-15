import { PlayIcon, StopCircleIcon } from "lucide-react";
import {Container} from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css"
import "./styles/theme.css"
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Container><Logo /></Container>
    <Container><Menu></Menu></Container>
    <Container><CountDown/></Container>
    <Container>
      <form action="" className="form">
        <div className="formRow">
          <DefaultInput id="meuInput" type="text" labelText="ads asdasdad" placeholder="Digite algo"/>
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayIcon size={24}/>} color="green"/>
          <DefaultButton icon={<StopCircleIcon size={24}/>} color="red"/>
        </div>
      </form>
      <Container><Footer /></Container>
    </Container>
    </>
  )
}

export default App

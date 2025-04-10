import {Container} from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/global.css"
import "./styles/theme.css"

function App() {
  return (
    <>
    <Container><Logo /></Container>
    <Container><Heading>Menu</Heading></Container>
    </>
  )
}

export default App

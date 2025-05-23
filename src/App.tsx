import { TaskContextProvider } from "./components/contexts/TaskContext/TaskContextProvider"
import { Home } from "./components/pages/Home"

import "./styles/global.css"
import "./styles/theme.css"


function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App

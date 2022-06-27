import { useState } from "react"
import AboutMe from "./sections/AboutMe"
import Navbar from "./sections/Navbar"
import { AnimationsContext } from "./contexts/AnimationsContext"
import { ActionContext } from "./contexts/ActionContext"
import { ActiveContext } from "./contexts/ActiveContext"
import animations from "./jsFiles/animations"
import WavyLane from "./components/WavyLane"

function App() {
  const [animation, setAnimation] = useState(animations)
  const [action, setAction] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <div className="App">
      <ActionContext.Provider value={{ action, setAction }}>
        <AnimationsContext.Provider value={{ animation, setAnimation }}>
          <ActiveContext.Provider value={{ active, setActive }}>
            <Navbar />
            <AboutMe />
            <WavyLane />
          </ActiveContext.Provider>
        </AnimationsContext.Provider>
      </ActionContext.Provider>
    </div>
  )
}

export default App

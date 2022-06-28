import { useState } from "react"
import { AnimationsContext } from "./contexts/AnimationsContext"
import { ActionContext } from "./contexts/ActionContext"
import { ActiveContext } from "./contexts/ActiveContext"
import Technologies from "./sections/Technologies"
import AboutMe from "./sections/AboutMe"
import Navbar from "./sections/Navbar"
import animations from "./jsFiles/animations"
import WavyLane from "./components/WavyLane"

function App() {
  const [animation, setAnimation] = useState(animations)
  const [action, setAction] = useState(false)
  const [active, setActive] = useState(false)
  const cosa = "linear-gradient(90deg, rgba(0, 11, 36, 1) 0%, rgba(61, 9, 121, 1) 30%, rgba(66, 99, 242, 1) 70%)"
  return (
    <div className="App">
      <ActionContext.Provider value={{ action, setAction }}>
        <AnimationsContext.Provider value={{ animation, setAnimation }}>
          <ActiveContext.Provider value={{ active, setActive }}>
            <Navbar />
            <AboutMe />
            <WavyLane background={"A"} />
            <Technologies />
            <WavyLane background={"B"} />
          </ActiveContext.Provider>
        </AnimationsContext.Provider>
      </ActionContext.Provider>
    </div>
  )
}

export default App

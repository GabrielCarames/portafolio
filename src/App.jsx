import { useState } from "react"
import { AnimationsContext } from "./contexts/AnimationsContext"
import { ActionContext } from "./contexts/ActionContext"
import { ActiveContext } from "./contexts/ActiveContext"
import Technologies from "./sections/Technologies"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import AboutMe from "./sections/AboutMe"
import Navbar from "./sections/Navbar"
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
            <WavyLane background={"A"} />
            <Technologies />
            <WavyLane background={"B"} />
            <Projects />
            <WavyLane background={"C"} />
            <Contact />
          </ActiveContext.Provider>
        </AnimationsContext.Provider>
      </ActionContext.Provider>
    </div>
  )
}

export default App

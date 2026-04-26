

import { FC, useEffect, useState } from "react"
import { Particles, initParticlesEngine } from "@tsparticles/react"
import type { Engine, ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import particlesOptions from "../../src/utils/particles_options.json"


const ParticlesBackground: FC = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  return (
    init ? (
      <Particles
        id="tsparticles"
        className="z-0 absolute"
        options={particlesOptions as ISourceOptions}
      />
    ) : null
  )
}

export default ParticlesBackground

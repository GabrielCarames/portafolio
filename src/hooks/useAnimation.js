import { useContext, useEffect } from "react"
import { AnimationsContext } from "../contexts/AnimationsContext"
import { ActionContext } from "../contexts/ActionContext"
import { ActiveContext } from "../contexts/ActiveContext"

export const useAnimation = () => {
  const { action, setAction } = useContext(ActionContext)
  const { animation } = useContext(AnimationsContext)
  const { setActive } = useContext(ActiveContext)
  const animations = animation

  const handleAnimation = animation => {
    let parameters = [animations, animation, action]
    if (!action) setAction(parameters)
    else if (action[1] === animation || (action[1] === "animationB" && animation === "animationC")) setAction(false)
  }

  const classNamesObtention = animationName => action[0][animationName].classNames.map(element => element)

  useEffect(() => {
    let classNames
    const animationName = action[1]
    if (action) classNames = classNamesObtention(animationName)
    switch (animationName) {
      case "animationA":
        setActive([...classNames])
        break
      case "animationB":
        setActive([...classNames])
        setTimeout(() => {
          setActive([...classNames])
        }, 2000)
        break
      case "animationC":
        setActive([...classNames])
        break
      case "animationD":
        setActive([...classNames])
        setTimeout(() => {
          setActive(false)
          setAction(false)
        }, 1500)
        break
      case "animationE":
        setActive([...classNames])
        setTimeout(() => {
          setActive(false)
          setAction(false)
        }, 1500)
        break
      case "animationF":
        setActive([...classNames])
        setTimeout(() => {
          setActive(false)
          setAction(false)
        }, 1500)
        break
      default:
        setActive(false)
    }
  }, [action])

  return { handleAnimation }
}

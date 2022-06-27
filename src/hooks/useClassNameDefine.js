import { useContext } from "react"
import { ActiveContext } from "../contexts/ActiveContext"

export const useClassNameDefine = () => {
  const { active } = useContext(ActiveContext)

  const classNameDefine = className => {
    console.log(className)
    if (active && active.some(element => element.className === className)) {
      let classNameToActive = active.map(element => element)
      return classNameToActive[0].className + classNameToActive[0].type
    } else return className
  }

  return { classNameDefine }
}

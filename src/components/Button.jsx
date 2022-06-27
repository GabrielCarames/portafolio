import { useAnimation } from "../hooks/useAnimation"
import { useClassNameDefine } from "../hooks/useClassNameDefine"

export default function Button({ className, animation, text }) {
  const { classNameDefine } = useClassNameDefine()
  const { handleAnimation } = useAnimation()

  return (
    <button className={classNameDefine(className)} onClick={() => handleAnimation(animation)}>
      {text}
    </button>
  )
}

import type { FC } from "react"
import type { IconProps } from "../../interfaces"

const JavaScriptIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className={`w-8 h-8 ${className}`}
    >
      <image
        width="100%"
        xlinkHref="data:image/webp;base64,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"
      />
    </svg>
  )
}

export default JavaScriptIcon
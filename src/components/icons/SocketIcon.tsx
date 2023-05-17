import type { FC } from "react"
import type { IconProps } from "../../interfaces"

const SocketIcon: FC<IconProps> = ({ className }) => {
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

export default SocketIcon

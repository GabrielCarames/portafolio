import type { FC } from "react"
import type { IconProps } from "../../interfaces"

const GraphQLIcon: FC<IconProps> = ({ className }) => {
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

export default GraphQLIcon

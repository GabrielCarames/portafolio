import type { FC } from "react"
import type { TagWrapperProps } from "../interfaces"

const TagWrapper: FC<TagWrapperProps> = ({ children }) => {
  return (
    <div className="w-max h-8 flex items-center gap-3 px-2 py-2 border-[1px] border-slate-200 rounded-xl shadow-md text-xs sm:text-sm text-gray-800">
      {children}
    </div>
  )
}

export default TagWrapper

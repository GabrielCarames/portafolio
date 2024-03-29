import { type FC } from "react"
import type { FormInputProps } from "../interfaces"

const FormInput: FC<FormInputProps> = ({
  containerClassName,
  inputClassName,
  name,
  label,
  placeholder,
  children
}) => {
  return (
    <div className={`col-span-full sm:col-span-3 ${containerClassName}`}>
      <label htmlFor={name} className="text-sm font-semibold text-white">
        {label}
      </label>
      {children ?? (
        <input
          type="text"
          placeholder={placeholder ?? label}
          name={name}
          className={`w-full rounded-md border-[5px] border-white-2 p-2 pl-2 shadow-md outline-none focus:border-green-1 bg-white-2 duration-75 ${inputClassName}`}
          required
        />
      )}
    </div>
  )
}

export default FormInput

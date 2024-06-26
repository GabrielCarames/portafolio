import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const useForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(false)

  const validateInputs = ({
    from_name,
    from_email,
    message
  }: {
    from_name: string
    from_email: string
    message: string
  }) => {
    const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const MESSAGE_REGEX = /^(?=.*[a-zA-Z0-9\W]).{10,1500}$/
    if (!NAME_REGEX.test(from_name)) return alert("Nombre inválido")
    if (!EMAIL_REGEX.test(from_email)) return alert("Email inválido")
    if (!MESSAGE_REGEX.test(message)) return alert("Mensaje inválido")
    return true
  }

  const sendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
    if (!formRef.current) return
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => alert("Mensaje enviado correctamente"))
      .catch(() =>
        alert(
          "Error al enviar el mensaje. Vuelve a intentarlo más tarde o contactame por mis redes."
        )
      )
      .finally(() => setSubmitButtonIsDisabled(true))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { from_name, from_email, message }: any = Object.fromEntries(
      formData.entries()
    )
    if (!validateInputs({ from_name, from_email, message })) return
    if (!formRef.current) return
    sendEmail(formRef)
  }

  return { handleSubmit, submitButtonIsDisabled, formRef }
}

export default useForm

import ScrollDownButton from "../components/ScrollDownButton"
import SocialMediaList from "../components/SocialMediaList"
import SeeCurriculum from "../components/SeeCurriculum"
import selfie from "../../public/selfie-3.webp"
import type { FC } from "react"
import type { SectionProps } from "../interfaces"

const AboutMe: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="absolute top-0 w-full" ref={sectionRef}></div>
      <article className="flex h-max w-full max-w-4xl flex-wrap-reverse items-center justify-center gap-10 px-8 md:px-0 md:max-w-6xl md:flex-nowrap md:justify-between">
        <div className="w-full max-w-none text-left md:max-w-lg">
          <h1 className="text-4xl font-bold lg:text-5xl">Gabriel Caramés</h1>
          <h2 className="mt-2 text-xl font-bold text-green-300 lg:text-2xl">
            Desarrollador Front-end en Inceptia AI
          </h2>
          <p className="mt-5 text-sm text-slate-100 lg:text-base">
            +2 años de experiencia como front-end, creando valor y convirtiendo
            proyectos en realidad. Comprometido en el trabajo en equipo y en la
            satisfacción de los clientes con el producto final. Actualmente
            trabajando en <b>Inceptia AI</b>
          </p>
          <div className="mt-7 md:mt-10 flex flex-wrap w-full gap-5">
            <SeeCurriculum />
            <div className="flex items-center">
              <SocialMediaList type="horizontal" />
            </div>
          </div>
        </div>
        <div className="h-36 w-36 rounded-full border-[0px] border-green-1 shadow-2xl shadow-blue-2 md:h-40 md:w-40 lg:h-72 lg:w-72">
          <img
            className="h-full w-full rounded-full object-cover"
            src={selfie}
            alt="Foto selfie de Gabriel Caramés"
          />
        </div>
      </article>
      <ScrollDownButton />
    </main>
  )
}

export default AboutMe

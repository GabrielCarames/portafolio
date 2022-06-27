import { useClassNameDefine } from "../hooks/useClassNameDefine"
import { useAnimation } from "../hooks/useAnimation"
import selfie from "../assets/selfie.png"
import Button from "../components/Button"

export default function AboutMe() {
  const { classNameDefine } = useClassNameDefine()
  const { handleAnimation } = useAnimation()

  return (
    <section id="about-me" /**che esto era main-nosequecuidado */ className={classNameDefine("about-me")}>
      <header className={classNameDefine("header")}>
        <img
          className={classNameDefine("header__image")}
          onMouseOver={() => handleAnimation("animationA")}
          onMouseLeave={() => handleAnimation("animationA")}
          src={selfie}
          alt="Foto selfie"
        />
        <div className="text">
          <h1 className="header__name">Gabriel Caramés</h1>
          <h2 className="header__title">
            Desarrollador web
            <br /> Front-end
          </h2>
          <Button className={"button"} animation={"animationC"} text={"Conocer más"} />
          <Button className={"button undo"} animation={"animationC"} text={"Contraer"} />
        </div>
      </header>
      <div className={classNameDefine("paragraph")}>
        <h3 className="paragraph__title">Sobre mí</h3>
        <p className="paragraph__text">
          Hola, soy <b> Gabriel Caramés, desarrollador web</b>. Me enfoco especialmente en la programación <b> Front-end </b>con
          <b> React.js</b>.
          <br /> La tecnología, programación y el progreso son las cosas que más me apasionan. Soy partidario de que las decisiones se deben
          realizar correctamente, o directamente no hacerlas. Tengo capacidad de <b>liderazgo</b>, <b>trabajo bien en equipo</b> y mantengo
          un<b> perfil tranquilo</b> y<b> proactivo</b>.
          <br />
          Me gusta esforzarme y aprender continuamente para superarme día a día. Siempre hay algo nuevo que mejorar.
        </p>
      </div>
    </section>
  )
}

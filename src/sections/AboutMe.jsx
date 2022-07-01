import { useClassNameDefine } from "../hooks/useClassNameDefine"
import { useAnimation } from "../hooks/useAnimation"
import selfie from "../assets/selfie.png"
import Button from "../components/Button"

export default function AboutMe() {
  const { classNameDefine } = useClassNameDefine()
  const { handleAnimation } = useAnimation()

  return (
    <section id="about-me" className={classNameDefine("about-me")}>
      <div className="scroll" name="about-me"></div>
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
          <br /> La <b> tecnología, programación y el progreso </b> son de las cosas que más me interesan. Me gusta creer que las decisiones
          se deben tomar correctamente, o directamente no hacerlas.
          <br /> Me considero <b>autodidacta</b>, me esfuerzo y aprendo continuamente por mi cuenta para superarme día a día. Siempre hay
          algo nuevo que mejorar.
          <br /> Actualmente estoy <b>emprendiento</b> en un negocio de diseño y venta de páginas web.{" "}
          <a className="paragraph__link" href="https://www.parchespaginasweb.com/" target="_blank">
            Parches Páginas Web
          </a>
        </p>
      </div>
    </section>
  )
}

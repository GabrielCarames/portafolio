import CircularCard from "../components/CircularCard"
import javaScript from "../assets/icons/javascript.png"
import github from "../assets/icons/github.png"
import react from "../assets/icons/react.png"
import redux from "../assets/icons/redux.png"
import figma from "../assets/icons/figma.png"
import html from "../assets/icons/html.png"
import sass from "../assets/icons/sass.png"
import css from "../assets/icons/css.png"
import git from "../assets/icons/git.png"

export default function Technologies() {
  const items = [
    { name: "React.js", image: react, link: "https://es.reactjs.org/" },
    { name: "JavaScript", image: javaScript, link: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { name: "HTML", image: html, link: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { name: "CSS", image: css, link: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { name: "Sass", image: sass, link: "https://sass-lang.com/" },
    { name: "Redux", image: redux, link: "https://es.redux.js.org/" },
    { name: "Figma", image: figma, link: "https://www.figma.com/" },
    { name: "Git", image: git, link: "https://git-scm.com/" },
    { name: "Github", image: github, link: "https://github.com/" }
  ]

  return (
    <div className="technologies">
      <div className="scroll" name="technologies"></div>
      <h3 className="technologies__title">Tecnologías</h3>
      <ul className="list">
        {items.map((item, index) => (
          <CircularCard image={item.image} name={item.name} link={item.link} key={index} />
        ))}
      </ul>
    </div>
  )
}

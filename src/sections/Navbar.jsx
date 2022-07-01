import { useState } from "react"
import { Link } from "react-scroll"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => (window.scrollY >= 50 ? setNavbar(true) : setNavbar(false))

  window.addEventListener("scroll", handleNavbar)

  return (
    <nav className="navbar">
      <ul className="nav">
        <Link activeClass="active" to="about-me" smooth={true} offset={-135} duration={500}>
          <li className="nav__item">
            <i className="nav__icon fa-regular fa-address-book"></i>
            <p className="nav__text">Sobre mí</p>
          </li>
        </Link>
        <Link activeClass="active" to="technologies" smooth={true} offset={-135} duration={500}>
          <li className="nav__item">
            <i className="nav__icon fab fa-react"></i>
            <p className="nav__text">Tecnologías</p>
          </li>
        </Link>
        <Link activeClass="active" to="projects" smooth={true} offset={-135} duration={500}>
          <li className="nav__item">
            <i className="nav__icon far fa-folder-open"></i>
            <p className="nav__text">Proyectos</p>
          </li>
        </Link>
        <Link activeClass="active" to="contact" smooth={true} offset={-135} duration={500}>
          <li className="nav__item">
            <i className="nav__icon far fa-envelope"></i>
            <p className="nav__text">Contacto</p>
          </li>
        </Link>
      </ul>
      <div className={navbar ? "navbar__line active" : "navbar__line"}></div>
    </nav>
  )
}

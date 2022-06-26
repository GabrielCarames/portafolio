export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav__item" /*onClick={() => { handleScroll('main-about', 'animationB') }}*/>
          <i className="nav__icon fa-regular fa-address-book"></i>
          <p className="nav__text">Sobre mí</p>
        </li>
        <li className="nav__item" /*onClick={() => { handleScroll('main-technologies', 'animationD') }}*/>
          <i className="nav__icon fab fa-react"></i>
          <p className="nav__text">Tecnologías</p>
        </li>
        <li className="nav__item" /*onClick={() => { handleScroll('main-proyects', 'animationE') }}*/>
          <i className="nav__icon far fa-folder-open"></i>
          <p className="nav__text">Proyectos</p>
        </li>
        <li className="nav__item" /*onClick={() => { handleScroll('main-contact', 'animationF') }}*/>
          <i className="nav__icon far fa-envelope"></i>
          <p className="nav__text">Contacto</p>
        </li>
      </ul>
    </nav>
  )
}

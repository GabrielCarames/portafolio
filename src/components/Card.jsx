import Button from "./Button"
import Tag from "./Tag"
export default function Card({ title, image, technologies, description }) {
  return (
    <article className="card">
      <header className="header">
        <img className="header__image" src={image} alt={`Screenshot de ${title}`} />
        <div className="wrapper">
          <h4 className="header__title">{title}</h4>
          <div className="buttons">
            <a className="buttons__link" href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="buttons__link" href="">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <ul className="tags">
          {technologies &&
            technologies.map((technology, index) => (
              <Tag
                name={technology.name}
                icon={technology.icon}
                backgroundColor={technology.backgroundColor}
                color={technology.color}
                key={index}
              />
            ))}
        </ul>
      </header>
      <div className="description">
        <p className="description__text">{description}</p>
      </div>
    </article>
  )
}

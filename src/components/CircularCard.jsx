export default function CircularCard({ image, name, link }) {
  return (
    <li className="circular-card">
      <a className="circular-card__link" href={link} target="_blank">
        <img className="circular-card__image" src={image} alt={`Icono de ${name}`} />
      </a>
      <p className="circular-card__text">{name}</p>
    </li>
  )
}

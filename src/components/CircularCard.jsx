export default function CircularCard({ image, text, link }) {
  return (
    <li className="circular-card">
      <a className="circular-card__link" href={link} target="_blank">
        <img className="circular-card__image" src={image} alt={`Icono de ${text}`} />
      </a>
      <p className="circular-card__text">{text}</p>
    </li>
  )
}

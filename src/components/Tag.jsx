export default function Tag({ name, icon, backgroundColor, color }) {
  return (
    <li className="tag" style={{ background: backgroundColor }}>
      <img className="tag__icon" src={icon} alt={`Icono de ${name}`} />
      <p className="tag__name" style={{ color: color }}>
        {name}
      </p>
    </li>
  )
}

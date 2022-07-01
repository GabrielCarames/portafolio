import CircularCard from "../components/CircularCard"
import linkedin from "../assets/icons/linkedin.png"
import whatsApp from "../assets/icons/whatsApp.png"
import github from "../assets/icons/github.png"
import gmail from "../assets/icons/gmail.png"
import curriculum from "../assets/Gabriel Caramés - Curriculum.pdf"

export default function Contact() {
  const items = [
    {
      name: "Gmail",
      image: gmail,
      link: "mailto:gabrielcarames1@gmail.com?subject=Propuesta de negocio.&body=¡Hola Gabriel!, me comunico con el fin de charlar sobre una propuesta de trabajo... "
    },
    { name: "Github", image: github, link: "https://github.com/GabrielCarames" },
    { name: "LinkedIn", image: linkedin, link: "https://www.linkedin.com/in/gabriel-caram%C3%A9s-a74bba1a5/" },
    {
      name: "WhatsApp",
      image: whatsApp,
      link: "https://api.whatsapp.com/send?phone=5491139153268&text=¡Hola Gabriel!, me comunico con el fin de charlar sobre una propuesta de trabajo..."
    }
  ]

  return (
    <div className="contact">
      <div className="scroll" name="contact"></div>
      <h3 className="contact__title">Medios de contacto</h3>
      <ul className="list">
        {items.map((item, index) =>
          item.name === "gmail" ? (
            <li className="circular-card">
              <a
                className="circular-card__link"
                href={item.link}
                onClick={event => {
                  window.open(item.link, "mail")
                  event.preventDefault()
                }}
                target="_blank"
                rel="noreferrer"
              >
                <img className="circular-card__image" src={image} alt={`Icono de ${item.name}`} />
              </a>
              <p className="circular-card__text">{item.name}</p>
            </li>
          ) : (
            <CircularCard image={item.image} name={item.name} link={item.link} key={index} />
          )
        )}
      </ul>
      <button className="button" onClick={() => window.open(curriculum, "_blank")}>
        Ver curriculum
      </button>
    </div>
  )
}

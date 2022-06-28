export default function WavyLane({ background }) {
  return (
    <div className="container">
      <div className={`hide ${background}`}></div>
      <div className={`wavy-lane ${background}`}></div>
    </div>
  )
}

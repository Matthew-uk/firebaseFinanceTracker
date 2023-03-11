import './card.css';
export default function Card({ img, head, p }) {
  return(
    <div className="card">
      <img src={img} alt="" />
      <h2>{head}</h2>
      <p>{p}</p>
    </div>
  );
}
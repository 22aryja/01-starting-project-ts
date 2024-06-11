import "./CoreConcept.css";
import { Concept } from "../../../data";

export default function CoreConcept({ image, title, description }: Concept) {
  return (
    <div className="core-concept-wrapper">
      <img className="img" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

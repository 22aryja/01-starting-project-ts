import logo from "./logo.svg";
import "./Header.css";

const reactDescriptions: string[] = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

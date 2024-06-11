import reactImg from "../../assets/amongUs.png";
import "./Header.css";

const dynamicDescriptions = [
  "An innovative coder",
  "A tech-savvy expert",
  "A versatile engineer",
  "A software craftsman",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = dynamicDescriptions[genRandomInt(3)];

  return (
    <header>
      <img src={reactImg} alt="Me" />
      <h1>Nico Prasetiawan</h1>
      <p>
        {description} you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

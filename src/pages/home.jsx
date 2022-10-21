import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// ur kind of spiky
const headerstrings = [
  "hi",
  ":)",
  "bread"
];

// Utility function to choose a random value from the language array
function randomWord() {
  return headerstrings[Math.floor(Math.random() * headerstrings.length)];
}

export default function Home() {

  const [name, setName] = React.useState(headerstrings[0]);

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeName = () => {
    
    // Choose a new Hello from our languages
    const newName = randomWord();
    
    // Call the function to set the state string in our component
    setName(newName);
  };
  return (
    <>
      <h1 className="title">{name}</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src={"../assets/logo.png"}
          className="homeimage"
          onClick={handleChangeName}
          alt="Illustration click to change title"
        />
   </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeName}>
          </a>
        </animated.div>
      </div>

    </>
  );
}
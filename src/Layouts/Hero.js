import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    const reactLogo = <FontAwesomeIcon icon={faReact} />;
    const javascriptLogo = <FontAwesomeIcon icon={faSquareJs} />;

  return (
    <section className="home">
        <h1>Gabriel Costa Gimenes</h1>
        <h2>Junior frontend / mobile developer</h2>
        <div className="skills">
          <div>
            <p>{javascriptLogo}</p>
            <p>JavaScript</p>
          </div>
          <div>
            <p>{reactLogo}</p>
            <p>React & React Native</p>
          </div>
        </div>
      </section>
  )
}

export default Hero
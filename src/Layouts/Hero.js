import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

import profile from "../Assets/Pictures/pesadaum-pesadao.gif";

const Hero = () => {
    const reactLogo = <FontAwesomeIcon icon={faReact} />;
    const javascriptLogo = <FontAwesomeIcon icon={faSquareJs} />;

  return (
    <section className="home">
      <div className="ball" />
      <div className="ball2" />
      <div className="ball3" />

        <div className="introduction">
          <div className="profilePicture"/>
          <div className="profileText">
            <p>Hi I'm</p>
            <p className="bigger"><spam className="light">&#123;</spam> Gabriel Gimenes <spam className="light">&#125;</spam></p>
            <p className="bigger">Junior frontend <spam className="light">/</spam> mobile developer</p>
            <div className="skills">
              <div>
                <p>{javascriptLogo}</p>
                <p>JavaScript</p>
              </div>
              <div>
                <p>{reactLogo}</p>
                <p>React & React Native</p>
              </div>
              <div>
                <p>{reactLogo}</p>
                <p>React & React Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
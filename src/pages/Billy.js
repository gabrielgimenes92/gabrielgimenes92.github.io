import React from 'react'
import Header from '../Layouts/Header'
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../Layouts/Footer';

import SS1 from "../Assets/Pictures/BillyGallery/SS1.png"
import SS2 from "../Assets/Pictures/BillyGallery/SS2.png"
import SS3 from "../Assets/Pictures/BillyGallery/SS3.png"
import SS4 from "../Assets/Pictures/BillyGallery/SS4.png"
import SS5 from "../Assets/Pictures/BillyGallery/SS5.png"
import SS6 from "../Assets/Pictures/BillyGallery/SS6.png"

const Billy = (props) => {
  const { id } = useParams();
  let { state } = useLocation();

  return (
    <div className="projectPage">
        <Header />

        
        <div className="title">
          <h1>Project Billy</h1>
        </div>
        <div className="links">
            <a className="customButton" href="http://invoicebilly.com" target="_blank">Application</a>
            <a className="customButton" href="https://github.com/orgs/mercury-squad/repositories" target="_blank">GitHub Repositories</a>
        </div>
        <div className="content">
          <p>{state.description}</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad necessitatibus obcaecati voluptate reprehenderit. Optio repellat ad perferendis explicabo iste voluptatem temporibus alias sunt odit fugit minus, distinctio, tempore fuga possimus placeat accusantium hic. Illo dolorum totam animi tempore, error veritatis officiis culpa ullam at corrupti explicabo quasi doloremque minima quis!</p>
        </div>
        <div className="gallery">
          <h2>Gallery</h2>
          <img src={SS1} alt="" />
          <img src={SS2} alt="" />
          <img src={SS3} alt="" />
          <img src={SS4} alt="" />
          <img src={SS5} alt="" />
          <img src={SS6} alt="" />
        </div>
        <Footer />
    </div>
  )
}

export default Billy
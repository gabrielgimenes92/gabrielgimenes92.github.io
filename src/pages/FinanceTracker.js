import React, { useState } from 'react'
import Header from '../Layouts/Header'
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../Layouts/Footer';
import ExpandedGallery from '../Components/ExpandedGallery';

import SS1 from "../Assets/Pictures/BillyGallery/SS1.png";
import SS2 from "../Assets/Pictures/BillyGallery/SS2.png";
import SS3 from "../Assets/Pictures/BillyGallery/SS3.png";
import SS4 from "../Assets/Pictures/BillyGallery/SS4.png";
import SS5 from "../Assets/Pictures/BillyGallery/SS5.png";
import SS6 from "../Assets/Pictures/BillyGallery/SS6.png";

const Billy = (props) => {
  const { id } = useParams();
  let { state } = useLocation();

  const [gallery, setGalley] = useState([
    {
      pic: SS1,
      description:"Empty Dashboard",
    },
    {
      pic: SS2,
      description:"Clients page",
    },
    {
      pic: SS3,
      description:"Projects page",
    },
    {
      pic: SS4,
      description:"Invoices page",
    },
    {
      pic: SS5,
      description:"Dashboard with some information",
    },
    {
      pic: SS6,
      description:"Invoice sent by email to client",
    }]);

  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  function expandImage() {
    
  }

  function handleImageClick(index, image) {
    setSelectedImage(image);
    setIsGalleryVisible(!isGalleryVisible);
  }

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
          {gallery.map((image, index) => <img src={image.pic} key={index} onClick={event => handleImageClick(index, image)}/>)}
        </div>
        {isGalleryVisible ? <ExpandedGallery gallery={gallery} selectedImage={selectedImage} setIsGalleryVisible={setIsGalleryVisible} isGalleryVisible={isGalleryVisible}/> : <></>}
        <Footer />
    </div>
  )
}

export default Billy
import React from 'react'
import Header from '../Layouts/Header'
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../Layouts/Footer';

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
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-23-41.png" alt="" />
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-32-31.png" alt="" />
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-33-10.png" alt="" />
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-38-55.png" alt="" />
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-39-20.png" alt="" />
          <img src="src/Assets/Pictures/BillyGallery/Screenshot from 2023-03-10 15-39-28.png" alt="" />
        </div>
        <Footer />
    </div>
  )
}

export default Billy
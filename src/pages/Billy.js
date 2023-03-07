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
        <div className="content">
          <p>{state.description}</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad necessitatibus obcaecati voluptate reprehenderit. Optio repellat ad perferendis explicabo iste voluptatem temporibus alias sunt odit fugit minus, distinctio, tempore fuga possimus placeat accusantium hic. Illo dolorum totam animi tempore, error veritatis officiis culpa ullam at corrupti explicabo quasi doloremque minima quis!</p>
        </div>
        <div className="gallery">
          <h2>Gallery</h2>
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
        </div>
        <Footer />
    </div>
  )
}

export default Billy
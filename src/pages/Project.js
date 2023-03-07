import React from 'react'
import Header from '../Layouts/Header'
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../Layouts/Footer';

const ProjectPage = (props) => {
  const { id } = useParams();
  let { state } = useLocation();

  return (
    <div className='projectPage'>
        <Header />
        <div className="title">
          <h1>Project {id}</h1>
          <h2>This page is under construction</h2>
        </div>
        <div className="content">
        </div>
        <div className="gallery"></div>
        <Footer />
    </div>
  )
}

export default ProjectPage
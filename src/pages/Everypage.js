import React from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'

const Everypage = () => {
  return (
    <div className='projectPage'>
        <Header />
        <div className="title">
            <h1>EveryPage</h1>
            <h2>Your friend bla bla bla</h2>
        </div>
        <div className="links">
            <a className="customButton" href="">Application</a>
            <a className="customButton" href="">Webpage</a>
            <a className="customButton" href="">GitHub</a>
        </div>
        <div className="content">
            <p>EveryPage was my capstone project at Langara's Web and Mobile App Development Diploma. For this project we had 12 weeks to design and develop a React Native application.</p>
            <img src="https://picsum.photos/400" alt="" />
            <img src="https://picsum.photos/400" alt="" />
            <p>The technologies chosen were React Native with NativeBase for the Front-end, NestJS for backend and Firebase along with MongoDB for storage, real-time chatting and authentication.</p>
            <p>The project was managed utilizing the agile methodology of weekly sprints, tasks assigned thru Trello and version control and Issue tracking with GitHub.</p>
            <img src="https://picsum.photos/400" alt="" />
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

export default Everypage
import React from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'

const Everypage = () => {
  return (
    <div className='projectPage'>
        <Header />
        <div className="title">
            <h1>everypage</h1>
            <h2>never stop reading</h2>
        </div>
        <div className="links">
            <a className="disabledButtom" href="">Application</a>
            <a className="customButton" href="https://everypage.ca/" target="_blank">Webpage</a>
            <a className="customButton" href="https://github.com/orgs/Team-Ditto/repositories" target="_blank">GitHub Repositories</a>
        </div>
        <div className="content">
            <div>
                <p>EveryPage was my capstone project at Langara's Web and Mobile App Development Diploma. For this project we had 12 weeks to design and develop a React Native application.</p>
                <p>The technologies chosen were React Native with NativeBase for the Front-end, NestJS for backend and Firebase along with MongoDB for storage, real-time chatting and authentication.</p>
                <p>The project was managed utilizing the agile methodology of weekly sprints, tasks assigned thru Trello and version control and Issue tracking with GitHub.</p>
            </div>
        <iframe src="https://player.vimeo.com/video/777963265?h=b9658d9483" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
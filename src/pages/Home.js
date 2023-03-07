import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Layouts/Header";
import Hero from "../Layouts/Hero";
import Body from "../Layouts/Body";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <>
    <Header></Header>
    <Hero />
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

export default Home
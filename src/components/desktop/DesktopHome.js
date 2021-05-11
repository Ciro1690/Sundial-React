import React from 'react';
import band from '../../assets/homepage.photo.band.png';
import '../../styles/desktop/DesktopHome.css';
import About from './About';
import Gallery from './Gallery';
import Buttons from './Buttons';
import Contact from './Contact';
import Market from './Market';
import logo from '../../assets/Sundial.png';
import tarts from '../../assets/tarts.png'

const DesktopHome = () => {
    return (
        <div class="container-fluid">
            <img className="mb-5" id="logo" src={logo} alt="logo"/>
            <img className="mb-5" id="band" src={band} alt="homepage"/>
            <Market/>
            <Gallery/>
            <Buttons/>
            <img className="mb-3" id="tarts" src={tarts} alt="logo" />
            <About/>
            <Contact/>
            <footer class="bg-warning text-center">
                <p class="ml-3">Sundial Pantry © 2021</p>
            </footer>
        </div>
    )
}

export default DesktopHome;
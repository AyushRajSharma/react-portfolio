import React, {Component} from 'react';
import PortfolioItem from './portfolioItem';

//import images
import mychat from '../assets/img/portfolio/mychat.png';
import fitnessTrack from '../assets/img/portfolio/fitTrack.png';
import DWRA from '../assets/img/portfolio/8.jpg';
import phonepe from '../assets/img/portfolio/phonepe.png';
import RBiped from '../assets/img/portfolio/biped.jpg';
import leap from '../assets/img/portfolio/leap-motion.png'

const portfolioItem = [
    {heading: 'Control of UAV with hand gestues using Leapmotion Controller', subheading: 'Aeromodeling Club Project, IIT Guwahati', image: leap},
    {heading: 'Drone With Robotic Arm', subheading: 'Aeromodeling Club Project, IIT Guwahati', image: DWRA},
    {heading: 'Robotic Biped', subheading: 'Techevince 2020, IIT Guwahati', image:RBiped},
   
    {heading: 'PhonePe App UI', subheading: 'Personal Project', image: phonepe},
    {heading: 'MyChat APP', subheading: 'Personal Project', image: mychat},
    {heading: 'Fitness Tracker portal', subheading: 'Sports Board Project, IIT Guwahati', image: fitnessTrack},

    
]
class PortFolio extends Component{
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">My Projects</h2>
                                <h3 className="section-subheading text-muted">Great Memories</h3>
                            </div>
                            <div className="row">
                              
                              {portfolioItem.map((item, index) => {
                                  return <PortfolioItem {...item} key={index}/>
                              })}
                                
                            </div>
                        </div>
                    </section>

            </div>
        );
    }
}

export default PortFolio;
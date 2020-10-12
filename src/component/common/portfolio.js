import React, {Component} from 'react';
import PortfolioItem from './portfolioItem';

//import images
import img1 from '../assets/img/portfolio/9.jfif';
import img2 from '../assets/img/portfolio/10.jpg';
import img3 from '../assets/img/portfolio/8.jpg';
import img4 from '../assets/img/portfolio/7.jpg';
import img5 from '../assets/img/portfolio/6.jpg';

const portfolioItem = [
    {heading: 'Ft. Cruiser', subheading: 'Aeromodeling Club Project', image: img1},
    {heading: 'Drone With Robotic Arm', subheading: 'Aeromodeling Club Project', image: img3},
    {heading: 'Robotic Biped', subheading: 'Techevince 2020 memory', image:img5},
   
    {heading: 'Me', subheading: '2020-Vacation', image: img2},
    {heading: 'Robotic Biped', subheading: 'Robotic Club Project', image: img4},

    
]
class PortFolio extends Component{
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">Portfolio</h2>
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
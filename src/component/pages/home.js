import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/7.jpg'
import Services from '../common/services';
import PortFolio from '../common/portfolio';

import Contact from '../pages/contact';
class Home extends Component{

    render(){
        return(
            <div>
                 <Header
                 title="Welcome Visitors!"
                 subtitle="It's Nice To Meet You"
                 link="/react-portfolio/about"
                 buttontext="Know about me more"
                 image={image}
                 showButton={false}
                 />
                 <Services/>
                 <PortFolio/>
                
                 <Contact/>
                 
                 
            </div>
        );
    }

}
export default Home;
import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/7.jpg'
import Services from '../common/services';
import PortFolio from '../common/portfolio';
import Team from '../common/team';
import Timeline from '../common/Timeline';
import Footer from '../common/footer';
class Home extends Component{

    render(){
        return(
            <div>
                 <Header
                 title="Welcome To Our Studio!"
                 subtitle="It's Nice To Meet You"
                 link="/react-portfolio/about"
                 buttontext="Know about me more"
                 image={image}
                 showButton={true}
                 />
                 <Services/>
                 <PortFolio/>
                 <Timeline/>
                 <Team/>
                 <Footer/>
                 
            </div>
        );
    }

}
export default Home;
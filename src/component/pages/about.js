import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/7.jpg'
import Timeline from '../common/Timeline';
import Team from '../common/team';
import Footer from '../common/footer';
import Services from '../common/services';

class About extends Component{

    render(){
        return(
            <div>
                
                 <Header
                 title="About Me"
                 subtitle="It's Really a great story"
        
                 image= {image}
                 showButton={false}
                 />
                    <Services/>
                  <Timeline/>
                  <Team/>
                  <Footer/>
            </div>
        );
    }
}

export default About;
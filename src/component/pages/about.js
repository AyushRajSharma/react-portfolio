import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/7.jpg'

import Footer from '../common/footer';
import Services from '../common/services';

class About extends Component{

    render(){
        return(
            <div>
                
                 <Header
                 title="About Me"
                 subtitle="Hello Visitors!!"
        
                 image= {image}
                 showButton={false}
                 />
                    <Services/>
                  <Footer/>
            </div>
        );
    }
}

export default About;
import React, {Component} from 'react';

//import images
import img1 from '../assets/img/team/4.jpg';
import img2 from '../assets/img/team/5.jpg';
import img3 from '../assets/img/team/6.jpg';
import TeamMember from './teamMember';

const teamMember=[
    {name: 'Ayush Raj', work: 'Web Developer', image:img1},
    {name: 'Ayush Raj', work: 'Android Developer (with flutter)', image:img2},
    {name: 'Ayush Raj', work: 'ML,crypto enthusiast', image:img3},
]

class Team extends Component{
    render(){
        return(
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">My Amazing Team</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <div className="row">
                       {teamMember.map((team, index) =>{
                           return <TeamMember {...team} key={index} />
                       })}
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p 
                        className="large text-muted">
                        </p></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
import React, {Component} from 'react';

class Timeline extends Component{
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">My journey.</h3>
                    </div>
                    <ul className="timeline">
                      
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/download.jpeg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2016-2017</h4>
                                    <h4 className="subheading">JLMHS</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">passed 10th statndard</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/3.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2017-2019</h4>
                                    <h4 className="subheading">Gaya College Gaya (Bihar)</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">completed 10+2 with BSEB with mathematics, physics and chemistry</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/IIT_Guwahati_Logo.svg.png" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2019</h4>
                                    <h4 className="subheading">IIT Guwahati</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Now I am student of IIT Guwahati pursuing my B-TECH with Mathematics And Computing.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Timeline;
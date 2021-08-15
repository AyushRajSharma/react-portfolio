import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class PageWrapper extends Component{

    render(){
        return(
            <div>
                  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/react-portfolio/"><h1 >Ayush Raj</h1></Link >
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ml-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/react-portfolio/">Portfolio</Link ></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/react-portfolio/about">About</Link ></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/react-portfolio/contact">Contact</Link ></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
    
}

export default PageWrapper;
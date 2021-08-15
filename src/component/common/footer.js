import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-left">© Developed By Ayush Raj</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="https://twitter.com/4yush_R4j"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/ayushd.raj"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/ayush-r-616504194/"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://medium.com/@ayushrajsharma8051"><i class="fab fa-medium"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="mailto:ayushrajsharma8051@gmail.com"><i class="far fa-envelope"></i></a>
                        </div>
                        <div class="col-lg-4 text-lg-right">
                            <a class="mr-3" href="#!">Privacy Policy</a>
                            <a href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
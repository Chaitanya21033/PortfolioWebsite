import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
function Footer (){
    return (
        <footer>
            <div className="container" style={{color:'pink'}}>
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Me</h4>
                        <p>Add a brief bio about yourself.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Navigation</h4>
                        <ul className="list-unstyled">
                            <Router>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Projects</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            </Router>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Me</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center" style={{color:'pink'}}>Built By &copy; {new Date().getFullYear()}Chirag Banka</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

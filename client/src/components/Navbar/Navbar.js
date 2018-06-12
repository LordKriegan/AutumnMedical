import React from 'react';
import navTitle from './images/nav-title.png';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand navBrandCust text-hide" style={{background: 'url("'+navTitle+'") center / contain no-repeat'}} href="">
                            Autumn Medical
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right text-center">
                                <li className="navLink"><a href="/">Home</a></li>
                                <li className="navLink"><a href="/areasofpractice">Areas of Practice</a></li>
                                <li className="navLink"><a href="/thestaff">The Staff</a></li>
                                <li className="navLink"><a href="/directions">Directions</a></li>
                                <li className="navLink"><a href="/contactus">Contact Us</a></li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;